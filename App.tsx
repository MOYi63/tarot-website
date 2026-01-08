import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import TarotExperience from './components/TarotExperience';
import InterpretationModal from './components/InterpretationModal';
import LiquidEther from './components/LiquidEther';
import { DrawnCard, InteractionMode, SpreadDefinition, GestureType } from './types';
import { SPREADS } from './constants';

const App: React.FC = () => {
  const [history, setHistory] = useState<DrawnCard[]>([]);
  const [mode, setMode] = useState<InteractionMode>('CAMERA');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Configuration State
  const [configOpen, setConfigOpen] = useState(false);
  const [customBackUrl, setCustomBackUrl] = useState<string | null>(null);
  
  // Visual & Particle Config
  const [particleColor, setParticleColor] = useState('#a855f7');
  const [particleCount, setParticleCount] = useState(1500); 
  const [particleSize, setParticleSize] = useState(2.0);
  
  // New Configs
  const [cardSpeed, setCardSpeed] = useState(1.0); // Multiplier
  const [cardScale, setCardScale] = useState(1.0); // Multiplier
  const [bgColor, setBgColor] = useState('#13002b'); // Deep Purple

  const [currentSpread, setCurrentSpread] = useState<SpreadDefinition | null>(null);
  const [spreadStep, setSpreadStep] = useState(0);

  // Interaction State
  const [activeGesture, setActiveGesture] = useState<GestureType>(GestureType.NONE);

  // Result Modal & AI State
  const [resultModalCard, setResultModalCard] = useState<DrawnCard | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<{visual: string, interpretation: string, advice: string} | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("连接宇宙...");
  const [aiError, setAiError] = useState<string | null>(null);

  // AI Generation Helper
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const generateInterpretation = async (card: DrawnCard) => {
    if (!process.env.API_KEY) {
        console.warn("API_KEY not found");
        setAiError("未检测到 API Key，请检查 Netlify 环境变量配置并重新部署。");
        return;
    }

    setIsAiLoading(true);
    setLoadingMessage("正在连接宇宙能量...");
    setAiAnalysis(null);
    setAiError(null);

    const MAX_RETRIES = 3;
    let attempt = 0;
    let success = false;

    while (attempt < MAX_RETRIES && !success) {
      try {
        attempt++;
        if (attempt > 1) {
            setLoadingMessage(`信号微弱，正在进行第 ${attempt} 次尝试...`);
        }

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const spreadContext = card.spreadContext || '无';
        const position = card.spreadPosition || '单张';
        const orientation = card.orientation === 'UPRIGHT' ? '正位' : '逆位';
        
        const prompt = `
        你是一位富有灵性、直觉敏锐且治愈系的资深塔罗占卜师。现在，请你为一位寻求指引的咨询者解读牌面。
        请忽略所有的机械感，用温暖、优美、富有文学性且直击人心的语言与咨询者对话。你的语言应该像深夜的烛光，既温柔又有力量。

        【牌面场景】
        咨询者在【${card.spreadName}】的【${position}】(${spreadContext})抽到了：
        ★ ${card.name} (${orientation}) ★

        请根据以下三个维度进行深度解读（请直接输出纯文本，严格按照以下三段式结构，段落之间换行）：

        【画面与意象】
        (请闭上眼睛感受这张牌的画面。结合${orientation}的状态，描述画面中光影、人物姿态或核心符号所传递的能量流动。语言要富有画面感和沉浸感，比如"画面中的天空..."或"那个身影仿佛..."不超过 40 字)

        【当下的启示】
        (结合牌阵位置，深入剖析这张牌揭示了咨询者内心深处怎样的状态？是焦虑、期待、还是某种未被察觉的力量？请像一位知己那样，温柔地点出ta目前的处境或心理活动，避免生硬的关键词堆砌。不超过 40 字)

        【光之指引】
        (最后，请给出一个具体、温暖且具有行动力的建议。不是空泛的"要加油"，而是具体的指引，比如"试着写下..."或"去大自然中..."。用充满希望的语调结束这次解读。不超过 40 字)
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: {
                // Safety settings can be adjusted here if needed, keeping defaults for now
            }
        });

        // Check for safety blocks or empty responses
        if (!response.text && response.candidates?.[0]?.finishReason) {
            const reason = response.candidates[0].finishReason;
            if (reason !== 'STOP') {
                throw new Error(`BLOCKED_${reason}`);
            }
        }

        const text = response.text || "";
        
        // Parsing logic
        const visualMatch = text.match(/【画面.*?】[：:\s]*([\s\S]*?)(?=【当下|【我的|【光|$)/);
        const interpMatch = text.match(/【当下.*?】[：:\s]*([\s\S]*?)(?=【光|【给|$)/);
        const adviceMatch = text.match(/【光.*?】[：:\s]*([\s\S]*?)$/);

        setAiAnalysis({
            visual: visualMatch ? visualMatch[1].trim() : "牌面在迷雾中显现...",
            interpretation: interpMatch ? interpMatch[1].trim() : text.slice(0, 100) + "...",
            advice: adviceMatch ? adviceMatch[1].trim() : "静心感受内心的指引。"
        });
        
        success = true;

      } catch (e: any) {
        console.error(`AI Generation Attempt ${attempt} failed`, e);
        
        // Analyze Error
        let isRetryable = true;
        let userMessage = "连接宇宙能量时遇到了一些波动...";
        
        const status = e.status || e.response?.status;
        const message = e.message || "";

        if (status === 401 || status === 403) {
            userMessage = "API 密钥无效或权限不足 (401/403)。请检查配置。";
            isRetryable = false;
        } else if (status === 404) {
            userMessage = "请求的模型不存在 (404)。请检查代码配置。";
            isRetryable = false;
        } else if (status === 429) {
            userMessage = "宇宙讯息过于密集 (429 Quota Exceeded)。";
            isRetryable = true;
        } else if (status >= 500) {
            userMessage = "宇宙通道暂时拥堵 (5xx Server Error)。";
            isRetryable = true;
        } else if (message.includes("BLOCKED")) {
            userMessage = "解读内容触犯了禁忌 (Safety Block)。";
            isRetryable = false;
        } else if (message.includes("fetch") || message.includes("network")) {
            userMessage = "网络连接已断开，请检查网络。";
            isRetryable = true;
        }

        // If not retryable, or last attempt failed
        if (!isRetryable || attempt === MAX_RETRIES) {
            setAiError(userMessage);
            // Fallback content to ensure user still gets an experience
            setAiAnalysis({
                visual: "星光暂时黯淡...",
                interpretation: "暂时无法获取详细的宇宙讯息，请相信你第一眼的直觉。",
                advice: "答案往往就在你自己心中。"
            });
            break;
        }

        // Wait before retry
        if (isRetryable) {
            await sleep(1000 * Math.pow(2, attempt)); // Exponential backoff: 2s, 4s, 8s...
        }
      }
    }
    
    setIsAiLoading(false);
  };

  // 1. Card Selected (Start AI immediately in background)
  const handleCardSelected = (card: DrawnCard) => {
     // Inject spread info
     const cardWithSpreadInfo = {
       ...card,
       spreadName: currentSpread?.name,
       spreadPosition: currentSpread?.positions[spreadStep]?.name,
       spreadContext: currentSpread?.positions[spreadStep]?.description
    };
    
    // Start AI Generation
    generateInterpretation(cardWithSpreadInfo);
    
    // We don't open modal yet, waiting for animation
    return cardWithSpreadInfo;
  };

  // 2. Animation Sequence Complete (Open Modal)
  const handleSequenceComplete = (card: DrawnCard) => {
     setHistory(prev => [card, ...prev]);
     setResultModalCard(card);
  };

  const handleModalClose = () => {
    setResultModalCard(null);
    setAiAnalysis(null);
    setAiError(null);

    if (currentSpread) {
        if (spreadStep < currentSpread.positions.length - 1) {
            setSpreadStep(prev => prev + 1);
        } else {
            // Finished spread, just reset step or go to summary, but don't force sidebar open
            setSpreadStep(0); 
            // Optionally clear spread or keep it.
        }
    }
  };

  const startSpread = (spread: SpreadDefinition) => {
      setCurrentSpread(spread);
      setSpreadStep(0);
      setHistory([]); 
      setSidebarOpen(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomBackUrl(url);
    }
  };

  if (!currentSpread) {
      return (
        <div className="w-full h-screen relative overflow-hidden font-sans text-white bg-[#13002b] flex flex-col items-center justify-center p-6">
             <div className="absolute inset-0 z-0">
                <LiquidEther colors={['#240046', '#3c096c', '#5a189a']} />
             </div>
             <div className="max-w-4xl w-full z-10 text-center relative">
                <div className="text-white/60 font-serif tracking-[0.3em] text-sm md:text-base mb-4 uppercase">The Mystic Journey</div>
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)] mb-8">
                    神秘塔罗牌
                </h1>
                <p className="text-purple-100/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12 text-left bg-[#1a0b2e]/60 p-6 rounded-xl backdrop-blur-md border border-purple-500/20 shadow-xl">
                    塔罗牌 (Tarot) 是一套包含78张卡片的图像符号系统。
                    <br/><br/>
                    请选择一种牌阵开始您的探索：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    {SPREADS.map(spread => (
                        <button 
                            key={spread.id}
                            onClick={() => startSpread(spread)}
                            className="group relative p-6 rounded-xl border border-purple-500/20 bg-[#240046]/40 hover:bg-[#3c096c]/60 hover:border-purple-400/50 transition-all duration-300 flex flex-col gap-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                        >
                            <h3 className="text-xl font-bold text-purple-200 group-hover:text-white">{spread.name}</h3>
                            <p className="text-xs text-white/50 group-hover:text-white/80">{spread.description}</p>
                            <div className="mt-2 flex gap-1">
                                {spread.positions.map((_, i) => (
                                    <div key={i} className="w-2 h-3 bg-white/20 rounded-sm"></div>
                                ))}
                            </div>
                        </button>
                    ))}
                </div>
             </div>
        </div>
      );
  }

  return (
    <div 
        className="w-full h-screen relative overflow-hidden font-sans selection:bg-purple-500 selection:text-white transition-colors duration-1000"
        style={{ background: bgColor }}
    >
      
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
         <LiquidEther colors={['#240046', '#3c096c', '#5a189a']} />
      </div>

      <div className="absolute inset-0 z-10">
        <TarotExperience 
          onCardSelected={handleCardSelected}
          onSequenceComplete={handleSequenceComplete}
          onGestureChange={setActiveGesture}
          mode={mode}
          setMode={setMode}
          currentSpread={currentSpread}
          currentStep={spreadStep}
          customBackUrl={customBackUrl}
          particleColor={particleColor}
          particleCount={particleCount}
          particleSize={particleSize}
          cardSpeed={cardSpeed}
          cardScale={cardScale}
          backgroundColor={bgColor}
        />
      </div>

      {/* Result Interpretation Modal */}
      {resultModalCard && (
        <InterpretationModal 
            card={resultModalCard} 
            aiAnalysis={aiAnalysis}
            isLoading={isAiLoading}
            loadingMessage={loadingMessage}
            error={aiError}
            onClose={handleModalClose} 
        />
      )}

      {/* Persistent Header */}
      <div className="absolute top-0 left-0 w-full z-20 flex flex-col items-center pt-6 pointer-events-none">
         <button 
            onClick={() => setCurrentSpread(null)} 
            className="pointer-events-auto text-white/40 hover:text-white text-xs uppercase tracking-widest mb-2 transition-colors"
         >
            ← Back to Spreads
         </button>
         <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{currentSpread.name}</h2>
         <div className="flex items-center gap-2 mt-2">
            {currentSpread.positions.map((pos, idx) => (
                <div key={idx} className={`h-1 rounded-full transition-all duration-500 ${idx === spreadStep ? 'w-8 bg-purple-400' : idx < spreadStep ? 'w-2 bg-green-400' : 'w-2 bg-white/20'}`} />
            ))}
         </div>
      </div>

      {/* GUI Toggle Buttons */}
      <div className="absolute top-6 right-6 z-30 flex gap-4">
        <button 
          onClick={() => setConfigOpen(!configOpen)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-lg"
        >
          <span className="text-base">⚙️</span>
        </button>
        <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-lg"
        >
            <span className="text-base">{sidebarOpen ? '✕' : '📚'}</span>
        </button>
      </div>

      {/* GUI Configuration Panel */}
      <div className={`absolute top-20 right-6 z-40 transition-all duration-300 transform origin-top-right ${configOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
         <div className="bg-[#1a0b2e]/90 backdrop-blur-xl border border-purple-500/30 p-6 rounded-2xl w-80 shadow-2xl overflow-y-auto max-h-[80vh] custom-scrollbar">
             <div className="flex justify-between items-center mb-4">
                 <h3 className="text-purple-200 font-bold">配置 (Configuration)</h3>
                 <button onClick={() => setConfigOpen(false)} className="text-white/40 hover:text-white">✕</button>
             </div>
             
             <div className="space-y-6">
                 
                 {/* System Status - NEW FEATURE FOR USER VERIFICATION */}
                 <div className="mb-4 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                     <div className="flex justify-between items-center text-xs">
                         <span className="text-white/70">API Key 状态</span>
                         <span className={process.env.API_KEY ? "text-green-400 font-bold" : "text-red-400 font-bold"}>
                             {process.env.API_KEY ? "已连接 (Connected)" : "未检测到 (Missing)"}
                         </span>
                     </div>
                     {!process.env.API_KEY && (
                         <div className="mt-2 text-[10px] text-red-300/80 leading-tight">
                             未检测到 API Key。请检查 Netlify 环境变量配置并手动 Trigger Deploy 重新部署。
                         </div>
                     )}
                 </div>

                 {/* Visuals */}
                 <div>
                    <label className="block text-xs text-white/60 mb-3 uppercase tracking-wide font-bold">场景设置 (Scene)</label>
                    <div className="mb-3">
                         <div className="flex justify-between text-xs text-white/70 mb-1">
                             <span>背景颜色 (Background)</span>
                         </div>
                         <input 
                             type="color" 
                             value={bgColor}
                             onChange={(e) => setBgColor(e.target.value)}
                             className="w-full h-8 rounded cursor-pointer bg-white/10 border border-white/20"
                         />
                    </div>
                 </div>

                 <div className="pt-4 border-t border-white/10">
                    <label className="block text-xs text-white/60 mb-3 uppercase tracking-wide font-bold">卡牌设置 (Cards)</label>
                    
                    <div className="mb-3">
                        <div className="flex justify-between text-xs text-white/70 mb-1">
                            <span>移动速度 (Speed)</span>
                            <span>{cardSpeed.toFixed(1)}x</span>
                        </div>
                        <input 
                            type="range" min="0.1" max="3.0" step="0.1"
                            value={cardSpeed}
                            onChange={(e) => setCardSpeed(parseFloat(e.target.value))}
                            className="w-full accent-purple-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    <div className="mb-3">
                        <div className="flex justify-between text-xs text-white/70 mb-1">
                            <span>卡牌大小 (Scale)</span>
                            <span>{cardScale.toFixed(1)}x</span>
                        </div>
                        <input 
                            type="range" min="0.5" max="2.0" step="0.1"
                            value={cardScale}
                            onChange={(e) => setCardScale(parseFloat(e.target.value))}
                            className="w-full accent-purple-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                 </div>

                 {/* Particle Settings */}
                 <div className="pt-4 border-t border-white/10">
                    <label className="block text-xs text-white/60 mb-3 uppercase tracking-wide font-bold">粒子效果 (Effects)</label>
                    <div className="mb-3">
                        <div className="flex justify-between text-xs text-white/70 mb-1">
                            <span>颜色 (Color)</span>
                        </div>
                        <input 
                            type="color" value={particleColor}
                            onChange={(e) => setParticleColor(e.target.value)}
                            className="w-full h-8 rounded cursor-pointer bg-white/10 border border-white/20"
                        />
                    </div>
                    <div className="mb-3">
                        <div className="flex justify-between text-xs text-white/70 mb-1">
                            <span>数量 (Count)</span>
                            <span>{particleCount}</span>
                        </div>
                        <input 
                            type="range" min="500" max="10000" step="500"
                            value={particleCount}
                            onChange={(e) => setParticleCount(parseInt(e.target.value))}
                            className="w-full accent-purple-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                    <div className="mb-3">
                        <div className="flex justify-between text-xs text-white/70 mb-1">
                            <span>大小 (Size)</span>
                            <span>{particleSize.toFixed(1)}</span>
                        </div>
                        <input 
                            type="range" min="0.5" max="10.0" step="0.5"
                            value={particleSize}
                            onChange={(e) => setParticleSize(parseFloat(e.target.value))}
                            className="w-full accent-purple-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                 </div>
                 
                 {/* Upload */}
                 <div className="pt-4 border-t border-white/10">
                     <label className="block text-xs text-white/60 mb-2 uppercase tracking-wide font-bold">自定义牌背</label>
                     <div className="relative group cursor-pointer">
                        <div className="border-2 border-dashed border-white/20 rounded-lg p-3 text-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all">
                             <span className="text-xs text-purple-300">点击上传图片</span>
                             <input 
                                type="file" accept="image/*" onChange={handleFileUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                             />
                        </div>
                     </div>
                 </div>
             </div>
         </div>
      </div>

      {/* Bottom Controls with Visual Feedback */}
      <div className="absolute bottom-12 w-full flex flex-col items-center justify-center z-20 pointer-events-none">
        {mode === 'CAMERA' && (
             <div className="mb-6 text-purple-300/70 text-sm animate-bounce flex items-center gap-2 bg-[#240046]/80 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">
                 <span>👋</span> 张开手快速滑动，食指悬停减速，食指翻转抓取
             </div>
        )}
        <div className="relative pointer-events-auto">
             {/* Pulse Ring for Gesture Feedback */}
             <div className={`absolute -inset-2 rounded-full border-2 border-purple-500 opacity-0 transition-all duration-200 ${activeGesture !== GestureType.NONE && mode === 'CAMERA' ? 'animate-ping opacity-100' : ''}`} />
             <div className={`absolute -inset-1 rounded-full bg-purple-500/20 transition-all duration-200 ${activeGesture !== GestureType.NONE && mode === 'CAMERA' ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`} />
             
             <button 
                onClick={() => setMode(mode === 'CAMERA' ? 'MOUSE' : 'CAMERA')}
                className="relative px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold tracking-wide backdrop-blur-md border border-white/10 transition-all text-sm z-10 shadow-lg"
             >
               {mode === 'CAMERA' ? '切换至鼠标🖱' : '切换至摄像头📹'}
             </button>
        </div>
      </div>

      {/* History Sidebar */}
      <div className={`absolute top-0 right-0 h-full w-80 md:w-96 bg-[#1a0b2e]/95 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-500 ease-out z-20 flex flex-col shadow-2xl ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-white/10 mt-16">
          <h2 className="text-xl text-purple-200 font-bold">解读记录</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
          {history.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-white/20 text-center">
              <p>暂无抽牌记录</p>
            </div>
          ) : (
            history.map((card, idx) => (
              <div key={card.timestamp + idx} className="bg-white/5 p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                 {/* (History Item Render Same as Before) */}
                <div className="absolute top-0 right-0 p-2 opacity-10 text-6xl font-serif pointer-events-none">
                    {card.suit === 'MAJOR' ? 'M' : card.suit?.[0]}
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-blue-300 bg-blue-900/30 px-2 py-0.5 rounded">
                        {card.spreadName || '抽牌'}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-purple-300 bg-purple-900/30 px-2 py-0.5 rounded">
                        {card.spreadPosition || `#${history.length - idx}`}
                    </span>
                </div>
                <h3 className="text-purple-100 font-bold text-sm mb-1">{card.name}</h3>
                <div className={`text-xs mb-3 ${card.orientation === 'UPRIGHT' ? 'text-green-400' : 'text-red-400'}`}>
                    {card.orientation === 'UPRIGHT' ? '正位 (Upright)' : '逆位 (Reversed)'}
                </div>
                <div className="w-full h-24 overflow-hidden rounded mb-3 bg-black/50">
                     <img src={card.url} alt={card.name} className={`w-full h-full object-contain ${card.orientation === 'REVERSED' ? 'rotate-180' : ''}`} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;