
export enum CardOrientation {
  Upright = 'UPRIGHT',
  Reversed = 'REVERSED',
}

export enum CardSuit {
  Major = 'MAJOR',
  Wands = 'WANDS', // 权杖 (Fire)
  Cups = 'CUPS',   // 圣杯 (Water)
  Swords = 'SWORDS', // 宝剑 (Air)
  Pentacles = 'PENTACLES' // 星币 (Earth)
}

export interface TarotCardData {
  id: number;
  name: string;
  suit: CardSuit;
  url: string; // Image URL
  meaningUpright: string;
  meaningReversed: string;
}

export interface DrawnCard extends TarotCardData {
  orientation: CardOrientation;
  timestamp: number;
  spreadPosition?: string; // e.g., "Past", "Obstacle"
  spreadName?: string;     // e.g., "Saint Triangle"
  spreadContext?: string;
}

export enum GestureType {
  NONE = 'NONE',
  OPEN = 'OPEN',   // Ready/Idle
  PINCH = 'PINCH', // Grab
  FIST = 'FIST',   // Confirm/Lock
  POINT = 'POINT'  // Highlight
}

export interface HandState {
  gesture: GestureType;
  x: number; // Normalized 0-1
  y: number; // Normalized 0-1
  isPresent: boolean;
}

export type InteractionMode = 'MOUSE' | 'CAMERA';

// Spread Definitions
export interface SpreadPosition {
  name: string;
  description: string;
}

export interface SpreadDefinition {
  id: string;
  name: string;
  description: string;
  positions: SpreadPosition[];
}
