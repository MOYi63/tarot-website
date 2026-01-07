import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Camera } from '@mediapipe/camera_utils';
import { Hands, Results } from '@mediapipe/hands';
import { GET_DECK, CARD_BACK_URL } from '../constants';
import { CardOrientation, DrawnCard, GestureType, HandState, InteractionMode, TarotCardData, SpreadDefinition } from '../types';

interface TarotExperienceProps {
  onCardSelected: (card: DrawnCard) => DrawnCard; // Trigger Start AI
  onSequenceComplete: (card: DrawnCard) => void;  // Trigger Modal Open
  onGestureChange: (gesture: GestureType) => void;
  mode: InteractionMode;
  setMode: (mode: InteractionMode) => void;
  currentSpread: SpreadDefinition | null;
  currentStep: number;
  customBackUrl: string | null;
  particleColor: string;
  particleCount: number;
  particleSize: number;
  cardSpeed: number;
  cardScale: number;
  backgroundColor: string;
}

// Shader for the Ash/Dissolve effect particles
const particleVertexShader = `
  attribute float size;
  attribute float alpha;
  varying float vAlpha;
  void main() {
    vAlpha = alpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const particleFragmentShader = `
  uniform vec3 color;
  uniform sampler2D map;
  varying float vAlpha;
  void main() {
    vec4 texColor = texture2D(map, gl_PointCoord);
    if (texColor.a < 0.5) discard;
    gl_FragColor = vec4(color * texColor.rgb, vAlpha);
  }
`;

const createFallbackTexture = (text: string, bgColor: string = '#1a0b2e', borderColor: string = '#8b5cf6') => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 856; 
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Rounded border rect
    const radius = 40;
    ctx.beginPath();
    ctx.roundRect(20, 20, canvas.width - 40, canvas.height - 40, radius);
    ctx.lineWidth = 20;
    ctx.strokeStyle = borderColor;
    ctx.stroke();
    
    ctx.fillStyle = borderColor;
    ctx.font = 'bold 40px Serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const words = text.split(' ');
    let y = canvas.height / 2;
    if(words.length > 2) {
        y -= 40;
        ctx.fillText(words.slice(0, Math.ceil(words.length/2)).join(' '), canvas.width / 2, y);
        ctx.fillText(words.slice(Math.ceil(words.length/2)).join(' '), canvas.width / 2, y + 60);
    } else {
        ctx.fillText(text, canvas.width / 2, y);
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
};

const TarotExperience: React.FC<TarotExperienceProps> = ({ 
  onCardSelected, onSequenceComplete, onGestureChange, 
  mode, setMode, currentSpread, currentStep, customBackUrl,
  particleColor, particleCount, particleSize,
  cardSpeed, cardScale, backgroundColor
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("正在初始化...");
  
  // Game State Refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
  // Logic State
  const deckGroupRef = useRef<THREE.Group | null>(null);
  const selectedMeshRef = useRef<THREE.Group | null>(null); 
  const particleSystemRef = useRef<THREE.Points | null>(null);
  const drawnDeckIdsRef = useRef<Set<number>>(new Set());

  // Animation Refs
  const scrollPosRef = useRef(0);
  const isDraggingRef = useRef(false);
  const lastMouseXRef = useRef(0);
  const currentScrollSpeedRef = useRef(0); 
  
  // Hand State Logic
  const mouseDownPosRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const mouseDownTimeRef = useRef(0);
  const isHoldingRef = useRef(false); // If true, user is "Pinching" a card
  
  // Sequence State: 'CHOOSING' (Normal) -> 'HELD' (Pinched) -> 'DISSOLVING' (Released) -> 'FINISHED'
  const gameStateRef = useRef<'CHOOSING' | 'HELD' | 'DISSOLVING' | 'FINISHED'>('CHOOSING');

  const currentCardDataRef = useRef<DrawnCard | null>(null);
  const currentOrientationRef = useRef<CardOrientation>(CardOrientation.Upright);
  
  const handStateRef = useRef<HandState>({ gesture: GestureType.NONE, x: 0.5, y: 0.5, isPresent: false });
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  
  const textureLoaderRef = useRef(new THREE.TextureLoader());
  const backTextureRef = useRef<THREE.Texture | null>(null);

  // --- Helper: Create Rounded Geometry ---
  const createRoundedCardGeometry = () => {
      const shape = new THREE.Shape();
      const width = 3;
      const height = 5;
      const radius = 0.25;
      const x = -width / 2;
      const y = -height / 2;
      
      shape.moveTo(x, y + radius);
      shape.lineTo(x, y + height - radius);
      shape.quadraticCurveTo(x, y + height, x + radius, y + height);
      shape.lineTo(x + width - radius, y + height);
      shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
      shape.lineTo(x + width, y + radius);
      shape.quadraticCurveTo(x + width, y, x + width - radius, y);
      shape.lineTo(x + radius, y);
      shape.quadraticCurveTo(x, y, x, y + radius);

      // Use ShapeGeometry with correct UV mapping
      const geometry = new THREE.ShapeGeometry(shape, 8); // Curve segments
      
      // Fix UVs for ShapeGeometry to map 0..1 across the bounding box
      const posAttribute = geometry.attributes.position;
      const uvAttribute = geometry.attributes.uv;
      for (let i = 0; i < posAttribute.count; i++) {
          const px = posAttribute.getX(i);
          const py = posAttribute.getY(i);
          // Map -1.5..1.5 to 0..1
          const u = (px + width/2) / width;
          const v = (py + height/2) / height;
          uvAttribute.setXY(i, u, v);
      }
      
      return geometry;
  };

  // --- Helper: Create Mesh ---
  const createCardMesh = (backTex: THREE.Texture) => {
      const geometry = createRoundedCardGeometry();
      
      // Front is initially dark
      const frontMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4, metalness: 0.5, side: THREE.FrontSide });
      const backMat = new THREE.MeshStandardMaterial({ map: backTex, roughness: 0.3, metalness: 0.2, side: THREE.FrontSide, color: 0xffffff });
      
      const frontMesh = new THREE.Mesh(geometry, frontMat);
      frontMesh.name = "FRONT";
      
      const backMesh = new THREE.Mesh(geometry, backMat);
      // Back mesh rotated 180 on Y so it faces opposite to Front
      backMesh.rotation.y = Math.PI; 
      
      const combinedMesh = new THREE.Group();
      combinedMesh.add(frontMesh);
      combinedMesh.add(backMesh);
      combinedMesh.userData = { isCard: true };
      
      // Ensure the group rotation starts so we see the Back (Y=PI)
      combinedMesh.rotation.y = Math.PI;
      
      return combinedMesh;
  };

  const setupDeckSpread = useCallback(() => {
    if (!sceneRef.current || !deckGroupRef.current || !backTextureRef.current) return;
    deckGroupRef.current.clear();
    selectedMeshRef.current = null;
    gameStateRef.current = 'CHOOSING';
    isHoldingRef.current = false;
    scrollPosRef.current = 0;
    currentScrollSpeedRef.current = 0;

    const cardCount = 18;
    for (let i = 0; i < cardCount; i++) {
        const card = createCardMesh(backTextureRef.current);
        card.position.set(0, 0, 0);
        card.rotation.set(0, Math.PI, 0);
        deckGroupRef.current.add(card);
    }
    deckGroupRef.current.position.set(0, -1.0, -5); 
    deckGroupRef.current.visible = true;
  }, []);

  // --- Trigger Particle Effect (Dissolve) ---
  const triggerDissolveEffect = useCallback(() => {
    if (!selectedMeshRef.current || !sceneRef.current || !currentCardDataRef.current) return;
    if (particleSystemRef.current) return;

    const cardObj = selectedMeshRef.current;
    
    // Configurable particles
    const count = particleCount; 
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const alphas = new Float32Array(count);
    const sizes = new Float32Array(count);

    // Get world position of the card to spawn particles
    const worldPos = new THREE.Vector3();
    cardObj.getWorldPosition(worldPos);

    for (let i = 0; i < count; i++) {
      // Box volume matching card size approx 3x5
      const x = (Math.random() - 0.5) * 3;
      const y = (Math.random() - 0.5) * 5;
      const z = (Math.random() - 0.5) * 0.2;
      
      // Transform local point to world rotation
      const localVec = new THREE.Vector3(x, y, z);
      localVec.applyQuaternion(cardObj.quaternion);
      
      positions[i * 3] = worldPos.x + localVec.x;
      positions[i * 3 + 1] = worldPos.y + localVec.y;
      positions[i * 3 + 2] = worldPos.z + localVec.z;

      // Particles explode outwards/upwards
      velocities[i * 3] = (Math.random() - 0.5) * 0.1 + localVec.x * 0.02;
      velocities[i * 3 + 1] = Math.random() * 0.1 + 0.05; 
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1 + localVec.z * 0.02;
      alphas[i] = 1.0;
      sizes[i] = Math.random() * particleSize + 1.0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const sparkTex = new THREE.TextureLoader().load("https://threejs.org/examples/textures/sprites/spark1.png");
    const material = new THREE.ShaderMaterial({
      uniforms: { color: { value: new THREE.Color(particleColor) }, map: { value: sparkTex } },
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    sceneRef.current.add(particles);
    particleSystemRef.current = particles;
    cardObj.visible = false; // Hide the actual card mesh immediately

    let frame = 0;
    const animateParticles = () => {
      if (!particleSystemRef.current) return;
      const attrPos = particleSystemRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const attrAlpha = particleSystemRef.current.geometry.attributes.alpha as THREE.BufferAttribute;
      let alive = false;

      for (let i = 0; i < count; i++) {
        if (attrAlpha.array[i] > 0) {
          alive = true;
          attrPos.array[i * 3] += velocities[i * 3];
          attrPos.array[i * 3 + 1] += velocities[i * 3 + 1];
          attrPos.array[i * 3 + 2] += velocities[i * 3 + 2];
          attrAlpha.array[i] -= 0.01 + Math.random() * 0.015; // Fade out
        }
      }
      attrPos.needsUpdate = true;
      attrAlpha.needsUpdate = true;
      frame++;

      if (alive) {
        requestAnimationFrame(animateParticles);
      } else {
        // FINISHED sequence
        if (sceneRef.current && particleSystemRef.current) {
          sceneRef.current.remove(particleSystemRef.current);
          particleSystemRef.current.geometry.dispose();
          particleSystemRef.current = null;
        }
        if(sceneRef.current && selectedMeshRef.current) {
            sceneRef.current.remove(selectedMeshRef.current);
        }
        
        // Final Callback to App (Open Modal)
        if (currentCardDataRef.current) {
            onSequenceComplete(currentCardDataRef.current);
        }
        setupDeckSpread(); // Reset deck for next time
      }
    };
    animateParticles();
  }, [onSequenceComplete, setupDeckSpread, particleColor, particleCount, particleSize]);

  // --- Hold/Grab Card Logic ---
  const grabCard = useCallback((cardGroup: THREE.Group) => {
    if (gameStateRef.current !== 'CHOOSING' || isHoldingRef.current) return;
    
    // 1. Change State
    gameStateRef.current = 'HELD';
    isHoldingRef.current = true;
    selectedMeshRef.current = cardGroup;

    // 2. Pick Data
    const FULL_DECK = GET_DECK();
    const available = FULL_DECK.filter(c => !drawnDeckIdsRef.current.has(c.id));
    // If deck empty, just reuse for demo visual
    const nextCardData = available.length > 0 ? available[Math.floor(Math.random() * available.length)] : FULL_DECK[0];
    const isReversed = Math.random() < 0.5;
    const orientation = isReversed ? CardOrientation.Reversed : CardOrientation.Upright;

    const partialCard: DrawnCard = {
        ...nextCardData,
        orientation: orientation,
        timestamp: Date.now()
    };
    currentCardDataRef.current = partialCard;
    currentOrientationRef.current = orientation;

    // 3. Move from Deck Group to Scene Root
    // Crucial: We do NOT rely on iterating children array while modifying it in the loop
    // handled by setting the userData flag or managing in the loop
    if (sceneRef.current && deckGroupRef.current) {
        const worldPos = new THREE.Vector3();
        cardGroup.getWorldPosition(worldPos);
        const worldQuat = new THREE.Quaternion();
        cardGroup.getWorldQuaternion(worldQuat);
        
        deckGroupRef.current.remove(cardGroup);
        sceneRef.current.add(cardGroup);
        
        cardGroup.position.copy(worldPos);
        cardGroup.quaternion.copy(worldQuat);
    }

    // 4. Start Loading Texture (Non-blocking)
    textureLoaderRef.current.load(nextCardData.url, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        const frontMesh = cardGroup.children.find(c => c.name === "FRONT") as THREE.Mesh;
        if(frontMesh) {
            (frontMesh.material as THREE.MeshStandardMaterial).map = tex;
            (frontMesh.material as THREE.MeshStandardMaterial).color.setHex(0xffffff);
            (frontMesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
        }
    });
    
  }, []);

  // --- Release Card Logic ---
  const releaseCard = useCallback(() => {
      if (gameStateRef.current !== 'HELD' || !selectedMeshRef.current || !currentCardDataRef.current) return;
      
      // 1. Change State
      gameStateRef.current = 'DISSOLVING';
      isHoldingRef.current = false;
      
      // 2. Trigger API Call NOW
      const finalized = onCardSelected(currentCardDataRef.current);
      drawnDeckIdsRef.current.add(finalized.id);
      
      // 3. Visual Effect
      triggerDissolveEffect();
      
  }, [onCardSelected, triggerDissolveEffect]);


  // Update Texture on Custom Back
  useEffect(() => {
    if (!customBackUrl || !deckGroupRef.current) return;
    textureLoaderRef.current.load(customBackUrl, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        backTextureRef.current = tex;
        // Update live
        deckGroupRef.current?.children.forEach(group => {
            const backMesh = group.children[1] as THREE.Mesh; 
            if (backMesh) {
                (backMesh.material as THREE.MeshStandardMaterial).map = tex;
                (backMesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
            }
        });
    });
  }, [customBackUrl]);

  // Init
  useEffect(() => {
    if (!containerRef.current) return;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 10);
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); 
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const spotLight = new THREE.SpotLight(0xa855f7, 20);
    spotLight.position.set(5, 10, 5);
    scene.add(spotLight);
    const pointLight = new THREE.PointLight(0x8b5cf6, 5);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    const deckGroup = new THREE.Group();
    scene.add(deckGroup);
    deckGroupRef.current = deckGroup;
    textureLoaderRef.current.setCrossOrigin('anonymous');

    const initGame = async () => {
        try {
            const backTex = await new Promise<THREE.Texture>((resolve) => {
               textureLoaderRef.current.load(customBackUrl || CARD_BACK_URL, resolve, undefined, () => resolve(createFallbackTexture("塔罗")));
            });
            backTex.colorSpace = THREE.SRGBColorSpace;
            backTextureRef.current = backTex;
            setupDeckSpread();
            setLoading(false);
            setStatus("准备就绪。");
        } catch (e) { setLoading(false); }
    };
    initGame();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    
    // Mouse Inputs (Mapping to Gestures)
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.set(x, y);
      
      if (mode === 'MOUSE') {
          handStateRef.current.x = e.clientX / window.innerWidth;
          handStateRef.current.y = e.clientY / window.innerHeight;
          handStateRef.current.isPresent = true;
          
          if (isDraggingRef.current) {
              // Mouse Down + Move = Pinching/Holding
              handStateRef.current.gesture = GestureType.PINCH;
          } else {
              // Mouse Move = Pointing (Hover)
              handStateRef.current.gesture = GestureType.POINT;
          }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
        if(mode === 'MOUSE') {
             isDraggingRef.current = true;
             handStateRef.current.gesture = GestureType.PINCH;
             mouseDownPosRef.current.set(e.clientX, e.clientY);
             mouseDownTimeRef.current = Date.now();
        }
    }

    const handleMouseUp = (e: MouseEvent) => {
        if(mode === 'MOUSE') {
            isDraggingRef.current = false;
            // Release the pinch -> Open Hand
            handStateRef.current.gesture = GestureType.OPEN;
        }
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [setupDeckSpread, mode, grabCard, releaseCard, cardSpeed, customBackUrl]); 

  // MediaPipe
  useEffect(() => {
    if (mode === 'MOUSE') return;
    let camera: Camera | null = null;
    let hands: Hands | null = null;

    const onResults = (results: Results) => {
      if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
        handStateRef.current.isPresent = false;
        handStateRef.current.gesture = GestureType.NONE;
        onGestureChange(GestureType.NONE);
        return;
      }
      const landmarks = results.multiHandLandmarks[0];
      handStateRef.current.isPresent = true;
      const indexTip = landmarks[8];
      const thumbTip = landmarks[4];
      const middleTip = landmarks[12];
      const ringTip = landmarks[16];
      const pinkyTip = landmarks[20];
      
      const pinchDist = Math.hypot(indexTip.x - thumbTip.x, indexTip.y - thumbTip.y);
      // Check if hand is open (fingers extended)
      const isHandOpen = middleTip.y < landmarks[9].y && ringTip.y < landmarks[13].y && pinkyTip.y < landmarks[17].y;
      
      handStateRef.current.x = 1 - indexTip.x;
      handStateRef.current.y = indexTip.y;
      mouseRef.current.x = (handStateRef.current.x * 2) - 1;
      mouseRef.current.y = -(handStateRef.current.y * 2) + 1;

      let newGesture = GestureType.NONE;
      
      if (pinchDist < 0.05) {
          newGesture = GestureType.PINCH; // Grab
      } else if (isHandOpen) {
          newGesture = GestureType.OPEN; // Fast scroll / Release
      } else {
          newGesture = GestureType.POINT; // Hover/Slow
      }

      handStateRef.current.gesture = newGesture;
      onGestureChange(newGesture); // Update UI
      
      if (newGesture === GestureType.PINCH) setStatus("抓取");
      else if (newGesture === GestureType.OPEN) setStatus("浏览");
      else setStatus("悬停");
    };

    if (videoRef.current) {
        // @ts-ignore
        hands = new window.Hands({locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`});
        hands.setOptions({ maxNumHands: 1, modelComplexity: 1, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
        hands.onResults(onResults);
        // @ts-ignore
        camera = new window.Camera(videoRef.current, {
            onFrame: async () => { if(hands && videoRef.current) await hands.send({image: videoRef.current}); },
            width: 640, height: 480
        });
        camera.start().catch(() => setMode('MOUSE'));
    }
    return () => { if(hands) hands.close(); }
  }, [mode, setMode, onGestureChange]);

  // Main Loop
  useEffect(() => {
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Cursor UI
      if (cursorRef.current) {
          const x = handStateRef.current.x * window.innerWidth;
          const y = handStateRef.current.y * window.innerHeight;
          cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
          cursorRef.current.style.opacity = handStateRef.current.isPresent ? '1' : '0';
          const gesture = handStateRef.current.gesture;
          if (gesture === GestureType.PINCH) cursorRef.current.style.borderColor = '#facc15'; // Yellow for grab
          else if (gesture === GestureType.OPEN) cursorRef.current.style.borderColor = '#ffffff';
          else cursorRef.current.style.borderColor = '#a855f7';
      }

      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const gesture = handStateRef.current.gesture;

      // Update Logic based on Gesture & State

      // 1. SCROLLING (Choosing)
      // Always scroll the remaining deck, even if holding a card (per requirement "other cards keep horizontal sliding")
      if (deckGroupRef.current) {
        
        // Raycast first to find hover target
        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
        const children = deckGroupRef.current.children; // Copy ref
        const intersects = raycasterRef.current.intersectObjects(children, true);
        
        let hoveredObj: THREE.Object3D | null = null;
        if (intersects.length > 0) {
            hoveredObj = intersects[0].object;
            while(hoveredObj.parent && hoveredObj.parent !== deckGroupRef.current) hoveredObj = hoveredObj.parent;
        }

        // Determine Speed based on Hand Gesture
        let targetSpeed = 0;
        if (gesture === GestureType.OPEN) {
            targetSpeed = cardSpeed * 0.05; // Fast scroll
        } else if (gesture === GestureType.POINT) {
            targetSpeed = cardSpeed * 0.005; // Slow scroll
        } else if (gesture === GestureType.PINCH) {
            targetSpeed = 0; // Stop scroll when grabbing
        }

        currentScrollSpeedRef.current = THREE.MathUtils.lerp(currentScrollSpeedRef.current, targetSpeed, 0.1);
        scrollPosRef.current -= currentScrollSpeedRef.current;

        const spacing = 4.0; 
        const totalWidth = children.length * spacing;
        
        children.forEach((child, i) => {
             // Calculate looped position
             let x = (i * spacing + scrollPosRef.current) % totalWidth;
             if (x < 0) x += totalWidth; 
             x -= totalWidth / 2;
             
             const isHover = child === hoveredObj;
             // Scale Logic:
             // Open Hand: Normal
             // Point (Hover): Scale Up (1.2)
             const baseScale = cardScale; 
             let targetScale = baseScale;
             
             if (gesture === GestureType.POINT && isHover) {
                 targetScale = baseScale * 1.2;
             }

             // Lerp to position
             child.position.x = THREE.MathUtils.lerp(child.position.x, x, 0.2); 
             child.position.y = THREE.MathUtils.lerp(child.position.y, 0, 0.1);
             child.position.z = THREE.MathUtils.lerp(child.position.z, 0, 0.1);
             child.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
             
             // Maintain Back Facing (Y=PI)
             child.rotation.set(0, Math.PI, 0);
        });

        // TRANSITION: CHOOSE -> GRAB
        if (hoveredObj && gesture === GestureType.PINCH && gameStateRef.current === 'CHOOSING') {
             grabCard(hoveredObj as THREE.Group);
        }
      }

      // 2. HELD STATE
      if (gameStateRef.current === 'HELD' && selectedMeshRef.current) {
          const card = selectedMeshRef.current;
          
          // Move Card to Hand Position but closer to camera
          // Project mouse/hand 2D to 3D plane at z=2
          const vec = new THREE.Vector3(mouseRef.current.x, mouseRef.current.y, 0.5);
          vec.unproject(cameraRef.current);
          const dir = vec.sub(cameraRef.current.position).normalize();
          const distance = -cameraRef.current.position.z + 4.0; // Place at z=4 (camera at 10)
          const targetPos = cameraRef.current.position.clone().add(dir.multiplyScalar(distance));
          
          card.position.lerp(targetPos, 0.1);
          card.rotation.set(0, Math.PI, 0); // Keep showing back
          card.scale.lerp(new THREE.Vector3(cardScale * 1.5, cardScale * 1.5, cardScale * 1.5), 0.1); // Giant scale

          // TRANSITION: GRAB -> RELEASE (DISSOLVE)
          if (gesture === GestureType.OPEN) {
              releaseCard();
          }
      }

      // 3. FINISHING/DISSOLVING handled by particle system animation loop in triggerDissolveEffect

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, [grabCard, releaseCard, cardSpeed, cardScale]);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="absolute inset-0 z-10" />
      <video ref={videoRef} className={`fixed bottom-6 right-6 w-48 h-36 object-cover rounded-xl border-2 border-purple-500/50 z-40 shadow-lg transform scale-x-[-1] transition-opacity duration-500 ${mode === 'CAMERA' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} playsInline />
      <div ref={cursorRef} className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-purple-400 bg-purple-500/20 shadow-lg pointer-events-none z-50 flex items-center justify-center -ml-6 -mt-6" style={{ opacity: 0 }}><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
      
      {/* Spread HUD */}
      {currentSpread && (
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
             <div className="bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-purple-500/30 text-center">
                 <p className="text-purple-300 text-xs uppercase tracking-widest mb-1">{currentSpread.name} · {currentStep + 1}/{currentSpread.positions.length}</p>
                 <h2 className="text-white font-bold text-lg">{currentSpread.positions[currentStep]?.name}</h2>
             </div>
        </div>
      )}
      
      {/* Loading */}
      {loading && <div className="absolute inset-0 flex items-center justify-center z-50 bg-black text-white"><div className="text-xl animate-pulse font-serif tracking-widest text-purple-400">LOADING VISIONS...</div></div>}
    </div>
  );
};

export default TarotExperience;