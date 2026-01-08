import { TarotCardData, CardSuit, SpreadDefinition } from './types';

// 核心修复：确保代理地址包含完整的 https://
export const CARD_BACK_URL = "https://wsrv.nl/?url=https://raw.githubusercontent.com/iamfiscus/tarot-api/master/static/card_back.jpg&q=80&output=webp"; 
export const CARD_BACK_FALLBACK = "https://images.unsplash.com/photo-1572916289348-20722c8e7263?q=80&w=400&auto=format&fit=crop";

export const SPREADS: SpreadDefinition[] = [
  { id: 'DAILY', name: '单牌每日抽', description: '今日的指引', positions: [{ name: '今日指引', description: '核心能量' }] },
  { id: 'TRIANGLE', name: '圣三角牌阵', description: '过去、现在、未来', positions: [{ name: '过去', description: '成因' }, { name: '现在', description: '现状' }, { name: '未来', description: '趋势' }] }
];

// 核心修复：生成带协议头的代理链接
const getCardUrl = (filename: string) => {
    return `https://wsrv.nl/?url=https://raw.githubusercontent.com/iamfiscus/tarot-api/master/static/cards/${filename}&w=400&q=75&output=webp`;
};

const MAJOR_ARCANA_BASE: Omit<TarotCardData, 'suit'>[] = [
  { id: 0, name: "0 愚者 (The Fool)", url: "rws00.jpg", meaningUpright: "开始", meaningReversed: "鲁莽" },
  { id: 1, name: "I 魔术师 (The Magician)", url: "rws01.jpg", meaningUpright: "创造", meaningReversed: "欺骗" },
  { id: 2, name: "II 女祭司 (High Priestess)", url: "rws02.jpg", meaningUpright: "直觉", meaningReversed: "秘密" },
  { id: 3, name: "III 皇后 (The Empress)", url: "rws03.jpg", meaningUpright: "丰饶", meaningReversed: "阻碍" },
  { id: 4, name: "IV 皇帝 (The Emperor)", url: "rws04.jpg", meaningUpright: "权威", meaningReversed: "控制" },
  { id: 5, name: "V 教皇 (The Hierophant)", url: "rws05.jpg", meaningUpright: "传统", meaningReversed: "反叛" },
  { id: 6, name: "VI 恋人 (The Lovers)", url: "rws06.jpg", meaningUpright: "爱", meaningReversed: "失衡" },
  { id: 7, name: "VII 战车 (The Chariot)", url: "rws07.jpg", meaningUpright: "胜利", meaningReversed: "失控" },
  { id: 8, name: "VIII 力量 (Strength)", url: "rws08.jpg", meaningUpright: "勇气", meaningReversed: "软弱" },
  { id: 9, name: "IX 隐士 (The Hermit)", url: "rws09.jpg", meaningUpright: "内省", meaningReversed: "孤立" },
  { id: 10, name: "X 命运之轮 (Wheel of Fortune)", url: "rws10.jpg", meaningUpright: "好运", meaningReversed: "厄运" }
];

const generateMinorArcana = (): TarotCardData[] => {
  const suits = [{ type: CardSuit.Wands, name: '权杖', urlCode: 'wands' }, { type: CardSuit.Cups, name: '圣杯', urlCode: 'cups' }, { type: CardSuit.Swords, name: '宝剑', urlCode: 'swords' }, { type: CardSuit.Pentacles, name: '星币', urlCode: 'pentacles' }];
  const ranks = [{ id: 1, name: 'Ace', zh: '首牌' }, { id: 2, name: 'Two', zh: '2' }, { id: 3, name: 'Three', zh: '3' }, { id: 4, name: 'Four', zh: '4' }, { id: 5, name: 'Five', zh: '5' }, { id: 6, name: 'Six', zh: '6' }, { id: 7, name: 'Seven', zh: '7' }, { id: 8, name: 'Eight', zh: '8' }, { id: 9, name: 'Nine', zh: '9' }, { id: 10, name: 'Ten', zh: '10' }, { id: 11, name: 'Page', zh: '侍从' }, { id: 12, name: 'Knight', zh: '骑士' }, { id: 13, name: 'Queen', zh: '王后' }, { id: 14, name: 'King', zh: '国王' }];
  const cards: TarotCardData[] = [];
  let idCounter = 22;
  suits.forEach(suit => {
    ranks.forEach(rank => {
      const fileName = `${suit.urlCode}${rank.id.toString().padStart(2, '0')}.jpg`;
      cards.push({ id: idCounter++, suit: suit.type, name: `${suit.name}${rank.zh}`, url: getCardUrl(fileName), meaningUpright: "正位意义", meaningReversed: "逆位意义" });
    });
  });
  return cards;
};

export const FULL_DECK: TarotCardData[] = [
  ...MAJOR_ARCANA_BASE.map(c => ({ ...c, suit: CardSuit.Major, url: getCardUrl(c.url) })),
  ...generateMinorArcana()
];

export const GET_DECK = () => FULL_DECK;