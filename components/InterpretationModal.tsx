import React, { useState, useEffect, useRef } from 'react';
import { DrawnCard } from '../types';

interface InterpretationModalProps {
  card: DrawnCard;
  onClose: () => void;
  aiAnalysis: { visual: string, interpretation: string, advice: string } | null;
  isLoading: boolean;
  loadingMessage?: string;
  error?: string | null;
}

// 打字机 Hook
const useTypewriter = (text: string, speed: number = 20, startDelay: number = 0, enabled: boolean = true) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    if(!enabled) return;
    setDisplayedText(''); setIsComplete(false);
    let timeoutId: any;
    const startTimeout = setTimeout(() => {
        let i = 0;
        timeoutId = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(prev => prev + text.charAt(i));
                i++;
            } else { clearInterval(timeoutId); setIsComplete(true); }
        }, speed);
    }, startDelay);
    return () => { clearTimeout(startTimeout); if(timeoutId) clearInterval(timeoutId); };
  }, [text, speed, startDelay, enabled]);
  return { displayedText, isComplete };
};

const InterpretationModal: React.FC<InterpretationModalProps> = ({ 
  card, onClose, aiAnalysis, isLoading, loadingMessage = "正在读取星辰的旨意...", error 
}) => {
  const orientationText = card.orientation === 'UPRIGHT' ? '正位' : '逆位';
  const hasData = !isLoading && !!aiAnalysis;
  const typeVisual = useTypewriter(aiAnalysis?.visual || "", 15, 0, hasData);
  const typeInterp = useTypewriter(aiAnalysis?.interpretation || "", 15, 0, hasData && typeVisual.isComplete);
  const typeAdvice = useTypewriter(aiAnalysis?.advice || "", 15, 0, hasData && typeInterp.isComplete);

  // --- 新增：卡牌倾斜交互逻辑 ---
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // 计算鼠标相对于屏幕中心的偏移量 (-1 到 1)
    const x = (clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (clientY - innerHeight / 2) / (innerHeight / 2);
    setTilt({ x: x * 20, y: -y * 20 }); // 20 是倾斜幅度，可以按需调整
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#050208]/80 backdrop-blur-xl animate-in fade-in duration-700"
      onClick={onClose}
      onMouseMove={handleMouseMove} // 监听鼠标移动
    >
      <div 
        className="relative flex flex-col items-center w-full max-w-2xl px-6 py-20"
        onClick={(e) => e.stopPropagation()}
        style={{ perspective: '1000px' }} // 开启 3D 视角
      >
        {/* 卡牌容器：应用旋转效果 */}
        <div 
          className="relative mb-12 transition-transform duration-200 ease-out"
          style={{ 
            transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
            <div className="absolute -inset-4 bg-purple-600/20 blur-3xl rounded-full opacity-50"></div>
            
            <div className={`relative w-64 md:w-80 aspect-[3/5] rounded-2xl shadow-[0_0_60px_rgba(168,85,247,0.3)] ${isLoading ? 'blur-md opacity-40' : ''}`}>
                <img 
                    src={card.url} 
                    alt={card.name} 
                    className={`w-full h-full object-cover rounded-2xl border border-white/10 ${card.orientation === 'REVERSED' ? 'rotate-180' : ''}`}
                />
                {/* 增加一个高光层，随摇摆变化 */}
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${50 + tilt.x}% ${50 + tilt.y}%, rgba(255,255,255,0.1) 0%, transparent 80%)`
                  }}
                />
            </div>

            {isLoading && (
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <div className="text-5xl animate-bounce mb-4">🔮</div>
                     <div className="text-purple-300 tracking-[0.3em] text-xs animate-pulse uppercase">{loadingMessage}</div>
                 </div>
            )}
        </div>

        {/* 文字区域（保持不变） */}
        <div className="w-full text-center space-y-8">
            <div className="space-y-2">
                <p className="text-purple-400/60 text-[10px] tracking-[0.4em] uppercase font-bold">{card.spreadName} · {card.spreadPosition}</p>
                <h2 className="text-4xl md:text-5xl font-serif text-white">{card.name}</h2>
                <p className={`text-xs tracking-[0.5em] font-bold uppercase ${card.orientation === 'UPRIGHT' ? 'text-emerald-400' : 'text-rose-400'}`}>{orientationText}</p>
            </div>

            <div className="space-y-10 text-gray-300 font-light leading-relaxed text-base md:text-lg">
                {hasData && <p className="italic text-purple-100/70 text-sm">{typeVisual.displayedText}</p>}
                {typeVisual.isComplete && <p className="text-white/90">{typeInterp.displayedText}</p>}
                {typeInterp.isComplete && (
                     <div className="bg-white/5 py-8 px-6 rounded-2xl border border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <p className="text-yellow-100/90 font-serif italic text-xl">{typeAdvice.displayedText}</p>
                    </div>
                )}
            </div>
            <div className="pt-12 pb-20 opacity-20"><p className="text-[10px] tracking-[0.3em] text-white uppercase animate-pulse">—— 点击空白处返回 ——</p></div>
        </div>
      </div>
    </div>
  );
};

export default InterpretationModal;