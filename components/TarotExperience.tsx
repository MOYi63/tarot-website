import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Camera } from '@mediapipe/camera_utils';
import { Hands, Results } from '@mediapipe/hands';
import { GET_DECK, CARD_BACK_URL, CARD_BACK_FALLBACK } from '../constants';
import { CardOrientation, DrawnCard, GestureType, HandState, InteractionMode, SpreadDefinition } from '../types';

interface TarotExperienceProps {
  onCardSelected: (card: DrawnCard) => void;
  onSequenceComplete: (card: DrawnCard) => void;
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

const TarotExperience: React.FC<TarotExperienceProps> = ({ 
  onCardSelected, onSequenceComplete, onGestureChange, 
  mode, setMode, currentSpread, currentStep, customBackUrl,
  particleColor, particleCount, particleSize,
  cardSpeed, cardScale
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null); 
  
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const deckGroupRef = useRef<THREE.Group | null>(null);
  const particleSystemRef = useRef<THREE.Points | null>(null);
  
  const cardsRef = useRef<THREE.Mesh[]>([]);
  const hoveredCardRef = useRef<THREE.Mesh | null>(null);
  const selectedMeshRef = useRef<THREE.Mesh | null>(null);
  const gameStateRef = useRef<'SCROLL' | 'REVEAL' | 'DISSOLVING'>('SCROLL');
  const isDrawingLockedRef = useRef(false);
  
  const baseScrollSpeed = 0.08 * cardSpeed;
  const currentSpeedRef = useRef(baseScrollSpeed);
  const scrollOffsetRef = useRef(0);
  
  const handStateRef = useRef<HandState>({ gesture: GestureType.NONE, x: 0.5, y: 0.5, isPresent: false });
  const smoothHandPosRef = useRef({ x: 0.5, y: 0.5 });
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  
  const textureLoaderRef = useRef(new THREE.TextureLoader());

  // 核心修复：允许跨域加载图片，防止 Failed 报错
  textureLoaderRef.current.setCrossOrigin('anonymous');

  const createCardGeometry = () => new THREE.BoxGeometry(3, 5, 0.05);

  const createCardMesh = (backTex: THREE.Texture | null, index: number) => {
      const geometry = createCardGeometry();
      // 核心修复：默认颜色从 0x222222 调亮到 0x888888，确保不黑屏
      const frontMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.5 });
      const backMatParams: THREE.MeshStandardMaterialParameters = { roughness: 0.3, metalness: 0.1, color: 0xffffff };
      if (backTex) { backMatParams.map = backTex; } else { backMatParams.color = 0x6b21a8; }
      const backMat = new THREE.MeshStandardMaterial(backMatParams);
      const sideMat = new THREE.MeshStandardMaterial({ color: 0xc0a040 }); 
      const materials = [sideMat, sideMat, sideMat, sideMat, frontMat, backMat];
      const mesh = new THREE.Mesh(geometry, materials);
      mesh.userData = { id: index, isCard: true };
      mesh.rotation.set(0, Math.PI, 0); 
      return mesh;
  };

  const createExplosion = (position: THREE.Vector3) => {
      const count = particleCount;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const colorObj = new THREE.Color(particleColor);
      for(let i=0; i<count; i++) {
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          const r = 0.1 + Math.random() * 2.0;
          positions[i*3] = position.x + r * Math.sin(phi) * Math.cos(theta);
          positions[i*3+1] = position.y + r * Math.sin(phi) * Math.sin(theta);
          positions[i*3+2] = position.z + r * Math.cos(phi);
          const speed = 0.05 + Math.random() * 0.1;
          velocities[i*3] = (positions[i*3] - position.x) * speed;
          velocities[i*3+1] = (positions[i*3+1] - position.y) * speed;
          velocities[i*3+2] = (positions[i*3+2] - position.z) * speed;
          colors[i*3] = colorObj.r; colors[i*3+1] = colorObj.g; colors[i*3+2] = colorObj.b;
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const material = new THREE.PointsMaterial({ size: particleSize * 0.05, vertexColors: true, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false });
      const points = new THREE.Points(geometry, material);
      points.userData = { velocities: velocities };
      return points;
  };

  const detectGesture = (landmarks: any[]): GestureType => {
      if (!landmarks || landmarks.length < 21) return GestureType.NONE;
      const wrist = landmarks[0];
      const indexTip = landmarks[8];
      const indexMCP = landmarks[5];
      const middleTip = landmarks[12];
      const ringTip = landmarks[16];
      const pinkyTip = landmarks[20];
      const dist3D = (p1: any, p2: any) => Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) + Math.pow(p1.z - p2.z, 2));
      const isExtended = (tip: any, mcp: any) => dist3D(tip, wrist) > dist3D(mcp, wrist) * 1.1;
      const iExt = isExtended(indexTip, indexMCP);
      const mExt = isExtended(middleTip, landmarks[9]);
      const rExt = isExtended(ringTip, landmarks[13]);
      const pExt = isExtended(pinkyTip, landmarks[17]);
      if (iExt && mExt && rExt && pExt) return GestureType.OPEN_PALM;
      if (iExt && !mExt && !rExt && !pExt) {
          const relativeX = indexTip.x - wrist.x;
          const relativeZ = indexTip.z - wrist.z;
          if (Math.abs(relativeX) > 0.15 || Math.abs(relativeZ) > 0.1) return GestureType.FLIP;
          return GestureType.POINTING;
      }
      return GestureType.NONE;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 14);
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2); 
    scene.add(ambientLight);
    const spotLight = new THREE.SpotLight(0xffaa00, 60);
    spotLight.position.set(5, 10, 10);
    scene.add(spotLight);
    
    const deckGroup = new THREE.Group();
    deckGroupRef.current = deckGroup;
    scene.add(deckGroup);

    const initCards = (texture: THREE.Texture | null) => {
        if (texture) texture.colorSpace = THREE.SRGBColorSpace;
        const count = 24; const spacing = 3.5;
        while(deckGroup.children.length > 0){ deckGroup.remove(deckGroup.children[0]); }
        cardsRef.current = [];
        for (let i = 0; i < count; i++) {
            const mesh = createCardMesh(texture, i);
            mesh.position.set((i - count/2) * spacing, 0, 0);
            deckGroup.add(mesh);
            cardsRef.current.push(mesh);
        }
    };

    const loadBackTexture = (url: string) => {
        textureLoaderRef.current.load(
            url, 
            (tex) => {
                initCards(tex);
            },
            undefined,
            () => {
                if (url !== CARD_BACK_FALLBACK) loadBackTexture(CARD_BACK_FALLBACK);
                else initCards(null);
            }
        );
    }
    loadBackTexture(customBackUrl || CARD_BACK_URL);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [customBackUrl]);

  useEffect(() => {
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

      smoothHandPosRef.current.x = THREE.MathUtils.lerp(smoothHandPosRef.current.x, handStateRef.current.x, 0.15);
      smoothHandPosRef.current.y = THREE.MathUtils.lerp(smoothHandPosRef.current.y, handStateRef.current.y, 0.15);

      if (cursorRef.current) {
          cursorRef.current.style.left = `${smoothHandPosRef.current.x * 100}%`;
          cursorRef.current.style.top = `${smoothHandPosRef.current.y * 100}%`;
          cursorRef.current.style.opacity = handStateRef.current.isPresent ? '1' : '0';
      }

      const gesture = handStateRef.current.gesture;
      const isScrollState = gameStateRef.current === 'SCROLL';

      if (isScrollState && deckGroupRef.current) {
          const spacing = 3.5 * cardScale;
          const count = cardsRef.current.length;
          const totalWidth = count * spacing;
          
          let hitCard: THREE.Mesh | null = null;
          const rayPos = new THREE.Vector2(smoothHandPosRef.current.x * 2 - 1, -(smoothHandPosRef.current.y * 2 - 1));
          raycasterRef.current.setFromCamera(rayPos, cameraRef.current!);
          const intersects = raycasterRef.current.intersectObjects(cardsRef.current);
          if (intersects.length > 0) hitCard = intersects[0].object as THREE.Mesh;
          hoveredCardRef.current = hitCard;

          let targetSpeed = (gesture === GestureType.POINTING || gesture === GestureType.FLIP || (mode === 'MOUSE' && hitCard)) ? 0 : baseScrollSpeed;
          currentSpeedRef.current = THREE.MathUtils.lerp(currentSpeedRef.current, targetSpeed, 0.1);
          scrollOffsetRef.current -= currentSpeedRef.current;

          cardsRef.current.forEach((card, i) => {
              let x = (i * spacing + scrollOffsetRef.current) % totalWidth;
              if (x < -totalWidth/2) x += totalWidth;
              if (x > totalWidth/2) x -= totalWidth;
              
              let targetPos = new THREE.Vector3(x, 0, 0);
              let targetScale = new THREE.Vector3(cardScale, cardScale, cardScale);
              let targetRot = new THREE.Euler(0, Math.PI, 0); 

              if (card === hitCard) {
                  targetPos.z = 3.5;
                  targetScale.multiplyScalar(1.3);
                  targetRot.y = Math.PI + (rayPos.x * 0.4);
                  targetRot.x = rayPos.y * 0.4;
              }

              card.position.lerp(targetPos, 0.2);
              card.scale.lerp(targetScale, 0.2);
              card.rotation.x = THREE.MathUtils.lerp(card.rotation.x, targetRot.x, 0.2);
              card.rotation.y = THREE.MathUtils.lerp(card.rotation.y, targetRot.y, 0.2);
          });
      }

      if (isScrollState && gesture === GestureType.FLIP && hoveredCardRef.current && !isDrawingLockedRef.current) {
          isDrawingLockedRef.current = true;
          gameStateRef.current = 'REVEAL';
          selectedMeshRef.current = hoveredCardRef.current;
          const fullDeck = GET_DECK();
          const randomCard = fullDeck[Math.floor(Math.random() * fullDeck.length)];
          const orientation = Math.random() > 0.5 ? CardOrientation.Upright : CardOrientation.Reversed;
          const drawnData = { ...randomCard, orientation, timestamp: Date.now() };
          selectedMeshRef.current.userData.drawnData = drawnData;
          selectedMeshRef.current.userData.revealStartTime = Date.now();
          
          textureLoaderRef.current.load(randomCard.url, (tex) => {
              tex.colorSpace = THREE.SRGBColorSpace;
              if(selectedMeshRef.current) {
                  const mat = (selectedMeshRef.current.material as THREE.Material[])[4] as THREE.MeshStandardMaterial;
                  mat.map = tex; mat.color.setHex(0xffffff); mat.needsUpdate = true;
              }
          });
          onCardSelected(drawnData);
      }

      if (gameStateRef.current === 'REVEAL' && selectedMeshRef.current) {
          const card = selectedMeshRef.current;
          const data = card.userData.drawnData as DrawnCard;
          card.position.lerp(new THREE.Vector3(0, 0, 5), 0.1);
          const elapsed = (Date.now() - card.userData.revealStartTime) / 1000;
          if (elapsed < 0.8) {
              const t = Math.min(elapsed / 0.6, 1);
              card.rotation.y = THREE.MathUtils.lerp(Math.PI, 0, 1 - Math.pow(1 - t, 4));
              card.rotation.z = data.orientation === CardOrientation.Reversed ? Math.PI : 0;
              card.scale.lerp(new THREE.Vector3(cardScale*1.8, cardScale*1.8, cardScale*1.8), 0.1);
          } else if (elapsed > 2.2) {
              gameStateRef.current = 'DISSOLVING';
              card.visible = false;
              const points = createExplosion(card.position);
              particleSystemRef.current = points;
              sceneRef.current?.add(points);
          }
      }

      if (gameStateRef.current === 'DISSOLVING' && particleSystemRef.current) {
          const points = particleSystemRef.current;
          const positions = points.geometry.attributes.position.array as Float32Array;
          const vels = points.userData.velocities;
          for(let i=0; i<positions.length; i+=3) {
              positions[i] += vels[i]; positions[i+1] += vels[i+1]; positions[i+2] += vels[i+2];
          }
          points.geometry.attributes.position.needsUpdate = true;
          (points.material as THREE.PointsMaterial).opacity -= 0.02;
          if ((points.material as THREE.PointsMaterial).opacity <= 0) {
              sceneRef.current?.remove(points);
              onSequenceComplete(selectedMeshRef.current!.userData.drawnData);
              gameStateRef.current = 'SCROLL';
              isDrawingLockedRef.current = false;
          }
      }
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, [baseScrollSpeed, cardScale, onCardSelected, onSequenceComplete]);

  // 相机与手势检测代码保持原样...
  useEffect(() => {
    if (mode === 'MOUSE') return;
    let camera: Camera | null = null;
    let hands = new Hands({ locateFile: (file) => `https://npm.elemecdn.com/@mediapipe/hands/${file}` });
    hands.setOptions({ maxNumHands: 1, modelComplexity: 1, minDetectionConfidence: 0.6 });
    hands.onResults((results) => {
        if (!results.multiHandLandmarks?.length) {
            handStateRef.current.isPresent = false;
            return;
        }
        const landmarks = results.multiHandLandmarks[0];
        handStateRef.current = { gesture: detectGesture(landmarks), x: 1 - landmarks[8].x, y: landmarks[8].y, isPresent: true };
        onGestureChange(handStateRef.current.gesture);
    });
    camera = new Camera(videoRef.current!, { onFrame: async () => { await hands.send({ image: videoRef.current! }); }, width: 640, height: 480 });
    camera.start();
    return () => { hands.close(); };
  }, [mode]);

  useEffect(() => {
      if (mode !== 'MOUSE') return;
      const onMove = (e: MouseEvent) => {
          handStateRef.current = { ...handStateRef.current, x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight, isPresent: true };
      };
      const onDown = () => { handStateRef.current.gesture = GestureType.FLIP; onGestureChange(GestureType.FLIP); };
      const onUp = () => { handStateRef.current.gesture = GestureType.NONE; onGestureChange(GestureType.NONE); };
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mousedown', onDown);
      window.addEventListener('mouseup', onUp);
      return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mousedown', onDown); window.removeEventListener('mouseup', onUp); };
  }, [mode]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 z-10" />
      <video ref={videoRef} className="hidden" />
      <div ref={cursorRef} className="fixed w-6 h-6 rounded-full border-2 border-white pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}; 

export default TarotExperience;