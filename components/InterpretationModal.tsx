import React, { useState, useEffect } from 'react';
import { DrawnCard } from '../types';

interface InterpretationModalProps {
  card: DrawnCard;
  onClose: () => void;
  aiAnalysis: { visual: string, interpretation: string, advice: string } | null;
  isLoading: boolean;
  error?: string | null;
}

const useTypewriter = (text: string, speed: number = 20, startDelay: number = 0, enabled: boolean = true) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if(!enabled) return;
    setDisplayedText('');
    setIsComplete(false);
    
    let timeoutId: ReturnType<typeof setInterval>;
    const startTimeout = setTimeout(() => {
        let i = 0;
        timeoutId = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timeoutId);
                setIsComplete(true);
            }
        }, speed);
    }, startDelay);

    return () => {
        clearTimeout(startTimeout);
        if(timeoutId) clearInterval(timeoutId);
    };
  }, [text, speed, startDelay, enabled]);

  return { displayedText, isComplete };
};

const InterpretationModal: React.FC<InterpretationModalProps> = ({ card, onClose, aiAnalysis, isLoading, error }) => {
  const orientationText = card.orientation === 'UPRIGHT' ? '正位' : '逆位';
  
  // Use AI data or Fallback
  const visualText = aiAnalysis?.visual || "";
  const interpText = aiAnalysis?.interpretation || "";
  const adviceText = aiAnalysis?.advice || "";

  // Only start typing when data is present (not loading) AND text is not empty
  const hasData = !isLoading && !!aiAnalysis;
  
  const typeVisual = useTypewriter(visualText, 10, 0, hasData);
  const typeInterp = useTypewriter(interpText, 10, 0, hasData && typeVisual.isComplete);
  const typeAdvice = useTypewriter(adviceText, 10, 0, hasData && typeInterp.isComplete);

  const allComplete = hasData && typeAdvice.isComplete;

  return (
    // Reduced backdrop blur for performance
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-[#0f0518]/90 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-5xl h-[85vh] bg-[#1a0b2e] rounded-3xl border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)] flex flex-col md:flex-row overflow-hidden">
        
        {/* Left: Card Image */}
        <div className="w-full md:w-1/3 h-48 md:h-full bg-black/20 flex items-center justify-center p-8 relative border-b md:border-b-0 md:border-r border-white/10">
            <div className={`relative w-full max-w-[280px] aspect-[3/5] rounded-xl shadow-2xl transition-all duration-1000 ${isLoading ? 'scale-95 opacity-50 blur-sm' : 'scale-100 opacity-100 blur-0'}`}>
                <img 
                    src={card.url} 
                    alt={card.name} 
                    className={`w-full h-full object-cover rounded-xl ${card.orientation === 'REVERSED' ? 'rotate-180' : ''}`}
                />
                <div className="absolute inset-0 rounded-xl border-2 border-purple-400/30 pointer-events-none"></div>
            </div>
            
            {/* Loading Overlay */}
            {isLoading && (
                 <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#1a0b2e]/40 backdrop-blur-sm">
                     <div className="text-4xl animate-spin mb-4">🔮</div>
                     <div className="text-purple-300 font-serif tracking-widest text-sm animate-pulse">
                        连接宇宙...
                     </div>
                 </div>
            )}
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 p-8 md:p-10 flex flex-col h-full overflow-y-auto custom-scrollbar relative">
            
            {/* Header */}
            <div className="mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3 mb-1">
                    <span className="bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded text-xs tracking-wider uppercase">
                        {card.spreadName}
                    </span>
                    <span className="text-white/40 text-xs tracking-widest uppercase">
                        {card.spreadPosition}
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">
                    {card.name}
                </h2>
                <div className={`text-sm tracking-widest font-bold ${card.orientation === 'UPRIGHT' ? 'text-green-400' : 'text-red-400'}`}>
                    {orientationText} ( {card.orientation} )
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-900/20 border border-red-500/30 text-red-200 p-4 rounded-xl mb-4 text-sm">
                    {error}
                </div>
            )}

            {/* Content Blocks */}
            <div className="space-y-6 flex-1 text-sm md:text-base leading-relaxed font-light text-gray-200">
                
                {/* 1. Visual */}
                <div className={`transition-opacity duration-500 ${hasData ? 'opacity-100' : 'opacity-30'}`}>
                    <h3 className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-1">【画面与意象】</h3>
                    <p className="min-h-[2rem] whitespace-pre-wrap text-purple-100/90">
                        {hasData ? typeVisual.displayedText : "正在凝视深渊..."}
                    </p>
                </div>

                {/* 2. Interpretation */}
                {(hasData && typeVisual.isComplete) && (
                    <div className="animate-slide-up">
                        <h3 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">【当下的启示】</h3>
                        <p className="min-h-[3rem] whitespace-pre-wrap text-blue-100/90">
                            {typeInterp.displayedText}
                        </p>
                    </div>
                )}

                {/* 3. Advice */}
                {(hasData && typeInterp.isComplete) && (
                     <div className="animate-slide-up bg-white/5 p-4 rounded-xl border-l-2 border-yellow-400/50 mt-4">
                        <h3 className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">【光之指引】</h3>
                        <p className="italic min-h-[2rem] whitespace-pre-wrap text-yellow-100">
                            {typeAdvice.displayedText}
                        </p>
                    </div>
                )}
            </div>

            {/* Footer Actions */}
            <div className="mt-6 pt-4 flex justify-end">
                <button 
                    onClick={onClose}
                    className={`
                        px-8 py-3 rounded-full font-bold tracking-widest transition-all duration-300 flex items-center gap-2
                        bg-white text-[#1a0b2e] hover:bg-purple-200 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]
                    `}
                >
                    {allComplete ? 'CLOSE' : 'SKIP / CLOSE'}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InterpretationModal;