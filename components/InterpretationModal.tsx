import React, { useState, useEffect } from 'react';
import { DrawnCard } from '../types';

interface InterpretationModalProps {
  card: DrawnCard;
  onClose: () => void;
  aiAnalysis: { visual: string, interpretation: string, advice: string } | null;
  isLoading: boolean;
  loadingMessage?: string;
  error?: string | null;
}

const useTypewriter = (text: string, speed: number = 20, startDelay: number = 0, enabled: boolean = true) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    if(!enabled) return;
    setDisplayedText(''); setIsComplete(false);
    let i = 0;
    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) { setDisplayedText(prev => prev + text.charAt(i)); i++; }
        else { clearInterval(interval); setIsComplete(true); }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(delayTimeout);
  }, [text, speed, startDelay, enabled]);
  return { displayedText, isComplete };
};

const InterpretationModal: React.FC<InterpretationModalProps> = ({ 
  card, onClose, aiAnalysis, isLoading, loadingMessage = "正在读取星辰的旨意..." 
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const hasData = !isLoading && !!aiAnalysis;
  const typeVisual = useTypewriter(aiAnalysis?.visual || "", 15, 0, hasData);
  const typeInterp = useTypewriter(aiAnalysis?.interpretation || "", 15, 0, hasData && typeVisual.isComplete);
  const typeAdvice = useTypewriter(aiAnalysis?.advice || "", 15, 0, hasData && typeInterp.isComplete);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#050208]/90 backdrop-blur-xl animate-in fade-in duration-700"
      onClick={onClose}
      onMouseMove={(e) => setTilt({ x: (e.clientX - window.innerWidth/2)/20, y: -(e.clientY - window.innerHeight/2)/20 })}
    >
      <div className="relative flex flex-col items-center w-full max-w-2xl px-6 py-20" onClick={(e) => e.stopPropagation()}>
        <div 
          className="relative mb-12 transition-transform duration-200 ease-out"
          style={{ transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`, transformStyle: 'preserve-3d' }}
        >
            <div className="absolute -inset-4 bg-purple-600/20 blur-3xl rounded-full opacity-50" />
            <div className={`relative w-64 md:w-80 aspect-[3/5] rounded-2xl shadow-[0_0_60px_rgba(168,85,247,0.3)] ${isLoading ? 'blur-md opacity-40' : ''}`}>
                <img 
                    src={card.url} 
                    alt={card.name} 
                    crossOrigin="anonymous" // 核心修复：允许跨域显示
                    className={`w-full h-full object-cover rounded-2xl border border-white/10 ${card.orientation === 'REVERSED' ? 'rotate-180' : ''}`}
                    onError={(e) => {
                      // 核心修复：图片挂了自动显示备份图
                      (e.target as HTMLImageElement).src = "https://raw.githubusercontent.com/iamfiscus/tarot-api/master/static/card_back.jpg";
                    }}
                />
            </div>
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl animate-bounce mb-4">🔮</div>
                <div className="text-purple-300 tracking-[0.3em] text-xs animate-pulse">{loadingMessage}</div>
              </div>
            )}
        </div>

        <div className="w-full text-center space-y-8">
            <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-serif text-white">{card.name}</h2>
                <p className={`text-xs tracking-[0.5em] font-bold ${card.orientation === 'UPRIGHT' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {card.orientation === 'UPRIGHT' ? '正位' : '逆位'}
                </p>
            </div>

            <div className="space-y-10 text-gray-300 font-light leading-relaxed">
                {hasData && <p className="italic text-purple-100/70 text-sm">{typeVisual.displayedText}</p>}
                {typeVisual.isComplete && <p className="text-white/90">{typeInterp.displayedText}</p>}
                {typeInterp.isComplete && (
                  <div className="bg-white/5 py-8 px-6 rounded-2xl border border-white/5">
                    <p className="text-yellow-100/90 font-serif italic text-xl">{typeAdvice.displayedText}</p>
                  </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default InterpretationModal;