import React, { useState, useCallback } from 'react';
import TarotExperience from './components/TarotExperience';
import InterpretationModal from './components/InterpretationModal';
import { DrawnCard, InteractionMode, GestureType, SpreadDefinition } from './types';
import { SPREADS } from './constants';

const App: React.FC = () => {
  const [mode, setMode] = useState<InteractionMode>('MOUSE');
  const [selectedCard, setSelectedCard] = useState<DrawnCard | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSpread, setCurrentSpread] = useState<SpreadDefinition>(SPREADS[0]);

  // --- 核心修复：切换到硅基流动 API ---
  const getAIInterpretation = async (card: DrawnCard) => {
    setIsLoading(true);
    setAiAnalysis(null);
    
    // 从环境变量读取你在 Netlify 填写的 Key
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

    try {
      const response = await fetch("https://api.siliconflow.cn/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // 使用硅基流动的 Qwen2.5 模型，适合中文且稳定
          model: "Qwen/Qwen2.5-7B-Instruct", 
          messages: [
            {
              role: "system",
              content: "你是一位神秘学大师。请根据用户抽到的塔罗牌，分三段提供解读：1.【星象视觉】描述牌面；2.【命运脉络】核心含义；3.【宇宙启示】给用户的建议。请保持专业且诗意的语气。"
            },
            {
              role: "user",
              content: `抽牌结果：${card.name}，位置：${card.orientation === 'UPRIGHT' ? '正位' : '逆位'}。请开始解读。`
            }
          ],
          temperature: 0.7
        })
      });

      const data = await response.json();
      const content = data.choices[0].message.content;

      // 将 AI 返回的长文本拆分为组件需要的格式
      const sections = content.split('\n\n');
      setAiAnalysis({
        visual: sections[0] || "正在感知星象...",
        interpretation: sections[1] || "命运的轮廓正在浮现...",
        advice: sections[2] || "这是来自宇宙的耳语。"
      });
    } catch (error) {
      console.error("AI 接入失败:", error);
      setAiAnalysis({
        visual: "星辰通信中断...",
        interpretation: "目前无法获取详细解读，请稍后再试。",
        advice: "请相信你第一眼的直觉，答案就在你心中。"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-[#050208] text-white">
      <TarotExperience 
        mode={mode}
        setMode={setMode}
        onCardSelected={(card) => {
            setSelectedCard(card);
            getAIInterpretation(card); // 抽牌时立即调用硅基流动
        }}
        onSequenceComplete={() => {}} 
        onGestureChange={() => {}}
        currentSpread={currentSpread}
        currentStep={0}
        customBackUrl={null}
        particleColor="#a855f7"
        particleCount={200}
        particleSize={2}
        cardSpeed={1}
        cardScale={1}
        backgroundColor="#050208"
      />

      {selectedCard && (
        <InterpretationModal 
          card={selectedCard}
          aiAnalysis={aiAnalysis}
          isLoading={isLoading}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
};

export default App;