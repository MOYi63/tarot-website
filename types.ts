
// 卡牌正逆位定义
export enum CardOrientation {
  Upright = 'UPRIGHT', // 正位
  Reversed = 'REVERSED', // 逆位
}

// 塔罗牌花色定义
export enum CardSuit {
  Major = 'MAJOR',    // 大阿卡纳
  Wands = 'WANDS',    // 权杖 (火元素)
  Cups = 'CUPS',      // 圣杯 (水元素)
  Swords = 'SWORDS',  // 宝剑 (风元素)
  Pentacles = 'PENTACLES' // 星币 (土元素)
}

// 基础塔罗牌数据接口
export interface TarotCardData {
  id: number;
  name: string;
  suit: CardSuit;
  url: string; // 图片链接
  meaningUpright: string; // 正位释义
  meaningReversed: string; // 逆位释义
}

// 抽出的卡牌数据接口（包含抽牌时的状态）
export interface DrawnCard extends TarotCardData {
  orientation: CardOrientation; // 正/逆位
  timestamp: number; // 抽牌时间戳
  spreadPosition?: string; // 例如："过去", "障碍"
  spreadName?: string;     // 例如："圣三角牌阵"
  spreadContext?: string;  // 牌阵位置的具体含义
}

// 手势类型定义
export enum GestureType {
  NONE = 'NONE',             // 无手势
  OPEN_PALM = 'OPEN_PALM',   // 张开手掌 -> 减速
  POINTING = 'POINTING',     // 食指指向 -> 悬停/聚焦
  FLIP = 'FLIP',             // 翻转动作 -> 触发翻牌
  CLOSED = 'CLOSED'          // 握拳 (暂未使用)
}

// 手势状态接口
export interface HandState {
  gesture: GestureType;
  x: number; // 归一化 X 坐标 (0-1)
  y: number; // 归一化 Y 坐标 (0-1)
  isPresent: boolean; // 手是否在摄像头视野内
  rotation?: number; // 可选的旋转度量
}

// 交互模式：鼠标 或 摄像头
export type InteractionMode = 'MOUSE' | 'CAMERA';

// 牌阵位置定义
export interface SpreadPosition {
  name: string;
  description: string;
}

// 牌阵定义
export interface SpreadDefinition {
  id: string;
  name: string;
  description: string;
  positions: SpreadPosition[];
}
