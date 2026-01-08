import { TarotCardData, CardSuit, SpreadDefinition } from './types';

// 使用 wsrv.nl 代理访问 Imgur 或其他外网图片，确保国内可见
// 并对其进行压缩优化 (q=80)
export const CARD_BACK_URL = "https://wsrv.nl/?url=raw.githubusercontent.com/iamfiscus/tarot-api/master/static/card_back.jpg&q=80&output=webp"; 
// 备用纯色图，如果上面加载失败
export const CARD_BACK_FALLBACK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88F/rPwAI8wNQD6Y5rAAAAABJRU5ErkJggg==";

// --- SPREAD DEFINITIONS (牌阵定义) ---
export const SPREADS: SpreadDefinition[] = [
  {
    id: 'DAILY',
    name: '单牌每日抽 (Daily Draw)',
    description: '最基础的方法，每天抽出一张牌，作为今日行动的灵感或提醒。',
    positions: [
      { name: '今日指引', description: '今日的核心能量与建议' }
    ]
  },
  {
    id: 'TRIANGLE',
    name: '圣三角牌阵 (Saint Triangle)',
    description: '分析事态演变规律，适合查看过去、现在与未来的线性发展。',
    positions: [
      { name: '过去 (Past)', description: '导致目前状况的成因' },
      { name: '现在 (Present)', description: '当下的核心状况' },
      { name: '未来 (Future)', description: '未来的发展趋势' }
    ]
  },
  {
    id: 'CHOICE',
    name: '二选一牌阵 (Two-Choice)',
    description: '面对两个纠结的选项时，对比两个方向各自的利弊。',
    positions: [
      { name: '现状', description: '目前的选择困境' },
      { name: '选项 A', description: '选择路径 A 的结果' },
      { name: '选项 B', description: '选择路径 B 的结果' },
      { name: '建议', description: '综合建议' }
    ]
  },
  {
    id: 'CELTIC',
    name: '凯尔特十字 (Celtic Cross)',
    description: '全方位深度洞察，涵盖外部环境、心理阻碍、潜在结果等十个维度。',
    positions: [
      { name: '核心', description: '问题的核心' },
      { name: '阻碍', description: '此时的阻碍或助力' },
      { name: '潜意识', description: '基底的基础与潜意识' },
      { name: '过去', description: '刚刚过去的影响' },
      { name: '意识', description: '你所知道的目标' },
      { name: '未来', description: '即将发生的事情' },
      { name: '态度', description: '你的自我认知' },
      { name: '环境', description: '周围环境与他人看法' },
      { name: '希望/恐惧', description: '内心的期待与担忧' },
      { name: '结果', description: '最终的综合结果' }
    ]
  }
];

// 辅助函数：生成国内可访问的图片链接
// 使用 wsrv.nl 代理 github raw content
const getCardUrl = (filename: string) => {
    return `https://wsrv.nl/?url=raw.githubusercontent.com/iamfiscus/tarot-api/master/static/cards/${filename}&w=400&q=75&output=webp`;
};

// --- MAJOR ARCANA BASE (大阿尔卡纳) ---
const MAJOR_ARCANA_BASE: Omit<TarotCardData, 'suit'>[] = [
  { id: 0, name: "0 愚者 (The Fool)", url: "rws00.jpg", meaningUpright: "新的开始，天真，自发性，自由的精神。", meaningReversed: "鲁莽，冒险，错误的决定，不负责任。" },
  { id: 1, name: "I 魔术师 (The Magician)", url: "rws01.jpg", meaningUpright: "创造力，足智多谋，意志力，显化。", meaningReversed: "欺骗，计划不周，怀才不遇，滥用力量。" },
  { id: 2, name: "II 女祭司 (High Priestess)", url: "rws02.jpg", meaningUpright: "直觉，神圣知识，潜意识，阴性能量。", meaningReversed: "秘密，与直觉断联，孤僻，表面化。" },
  { id: 3, name: "III 皇后 (The Empress)", url: "rws03.jpg", meaningUpright: "丰饶，母性，自然，美，滋养。", meaningReversed: "创造力受阻，过度依赖，缺乏关怀。" },
  { id: 4, name: "IV 皇帝 (The Emperor)", url: "rws04.jpg", meaningUpright: "权威，架构，稳固，父亲形象。", meaningReversed: "专制，过度控制，缺乏纪律，僵化。" },
  { id: 5, name: "V 教皇 (The Hierophant)", url: "rws05.jpg", meaningUpright: "精神智慧，宗教信仰，传统，从众。", meaningReversed: "挑战现状，个人信仰，反叛，自由。" },
  { id: 6, name: "VI 恋人 (The Lovers)", url: "rws06.jpg", meaningUpright: "爱，和谐，人际关系，价值观一致。", meaningReversed: "不和谐，自我中心，失衡，价值观冲突。" },
  { id: 7, name: "VII 战车 (The Chariot)", url: "rws07.jpg", meaningUpright: "控制，意志力，胜利，决心。", meaningReversed: "失控，缺乏方向，侵略性。" },
  { id: 8, name: "VIII 力量 (Strength)", url: "rws08.jpg", meaningUpright: "力量，勇气，耐心，控制，同情。", meaningReversed: "软弱，自我怀疑，缺乏自律。" },
  { id: 9, name: "IX 隐士 (The Hermit)", url: "rws09.jpg", meaningUpright: "内省，寻求真理，独处，指引。", meaningReversed: "孤立，寂寞，退缩，拒绝建议。" },
  { id: 10, name: "X 命运之轮 (Wheel of Fortune)", url: "rws10.jpg", meaningUpright: "好运，业力，生命周期，命运的转折。", meaningReversed: "厄运，抗拒改变，打破循环，失控。" },
  { id: 11, name: "XI 正义 (Justice)", url: "rws11.jpg", meaningUpright: "正义，公平，真理，因果。", meaningReversed: "不公，不诚实，逃避责任。" },
  { id: 12, name: "XII 倒吊人 (The Hanged Man)", url: "rws12.jpg", meaningUpright: "暂停，投降，新视角，牺牲。", meaningReversed: "拖延，抵抗，停滞，无谓的牺牲。" },
  { id: 13, name: "XIII 死神 (Death)", url: "rws13.jpg", meaningUpright: "结束，改变，转变，过渡。", meaningReversed: "抗拒改变，停滞不前，无法释怀。" },
  { id: 14, name: "XIV 节制 (Temperance)", url: "rws14.jpg", meaningUpright: "平衡，适度，耐心，目标。", meaningReversed: "失衡，过度，缺乏远见。" },
  { id: 15, name: "XV 恶魔 (The Devil)", url: "rws15.jpg", meaningUpright: "束缚，成瘾，唯物主义，性。", meaningReversed: "挣脱束缚，重获力量，打破枷锁。" },
  { id: 16, name: "XVI 高塔 (The Tower)", url: "rws16.jpg", meaningUpright: "灾难，剧变，突然的启示，骄傲的崩塌。", meaningReversed: "避免灾难，恐惧改变，延迟的破坏。" },
  { id: 17, name: "XVII 星星 (The Star)", url: "rws17.jpg", meaningUpright: "希望，信仰，目的，更新，灵性。", meaningReversed: "绝望，缺乏信心，沮丧。" },
  { id: 18, name: "XVIII 月亮 (The Moon)", url: "rws18.jpg", meaningUpright: "幻觉，恐惧，焦虑，潜意识。", meaningReversed: "释放恐惧，压抑的情感，混乱。" },
  { id: 19, name: "XIX 太阳 (The Sun)", url: "rws19.jpg", meaningUpright: "积极，温暖，成功，活力。", meaningReversed: "暂时消沉，缺乏成功，虚假的快乐。" },
  { id: 20, name: "XX 审判 (Judgement)", url: "rws20.jpg", meaningUpright: "审判，重生，内心召唤，宽恕。", meaningReversed: "自我怀疑，拒绝召唤，无法前进。" },
  { id: 21, name: "XXI 世界 (The World)", url: "rws21.jpg", meaningUpright: "完成，整合，成就，旅行。", meaningReversed: "未完成，缺乏封闭，停滞。" }
];

// --- MINOR ARCANA GENERATION (小阿尔卡纳) ---
const generateMinorArcana = (): TarotCardData[] => {
  const suits = [
    { type: CardSuit.Wands, name: '权杖', en: 'Wands', element: '火', urlCode: 'wands' },
    { type: CardSuit.Cups, name: '圣杯', en: 'Cups', element: '水', urlCode: 'cups' },
    { type: CardSuit.Swords, name: '宝剑', en: 'Swords', element: '风', urlCode: 'swords' },
    { type: CardSuit.Pentacles, name: '星币', en: 'Pentacles', element: '土', urlCode: 'pentacles' }
  ];
  
  const ranks = [
    { id: 1, name: 'Ace', zh: '首牌' },
    { id: 2, name: 'Two', zh: '2' },
    { id: 3, name: 'Three', zh: '3' },
    { id: 4, name: 'Four', zh: '4' },
    { id: 5, name: 'Five', zh: '5' },
    { id: 6, name: 'Six', zh: '6' },
    { id: 7, name: 'Seven', zh: '7' },
    { id: 8, name: 'Eight', zh: '8' },
    { id: 9, name: 'Nine', zh: '9' },
    { id: 10, name: 'Ten', zh: '10' },
    { id: 11, name: 'Page', zh: '侍从' },
    { id: 12, name: 'Knight', zh: '骑士' },
    { id: 13, name: 'Queen', zh: '王后' },
    { id: 14, name: 'King', zh: '国王' }
  ];

  const cards: TarotCardData[] = [];
  let idCounter = 22;

  suits.forEach(suit => {
    ranks.forEach(rank => {
      const fileName = `${suit.urlCode}${rank.id.toString().padStart(2, '0')}.jpg`;
      cards.push({
        id: idCounter++,
        suit: suit.type,
        name: `${suit.name}${rank.zh} (${rank.name} of ${suit.en})`,
        url: getCardUrl(fileName),
        meaningUpright: `${suit.element}元素的体现。${rank.name} 代表的能量处于顺流状态。`,
        meaningReversed: `${suit.element}元素的体现。${rank.name} 代表的能量处于受阻或过度状态。`
      });
    });
  });

  return cards;
};

// --- FULL DECK (完整牌组) ---
export const FULL_DECK: TarotCardData[] = [
  ...MAJOR_ARCANA_BASE.map(c => ({ ...c, suit: CardSuit.Major, url: getCardUrl(c.url) })),
  ...generateMinorArcana()
];

export const GET_DECK = () => FULL_DECK;