import type { Card, Rank, Suit } from './types';

export const ALL_RANKS: string[] = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'T',
  'J',
  'Q',
  'K',
  'A',
] satisfies Rank[];

export const ALL_SUITS: string[] = ['c', 'd', 'h', 's'] satisfies Suit[];

export const ALL_CARDS = ALL_RANKS.reduce((acc: Card[], rank) => {
  acc.push(...ALL_SUITS.map((suit) => `${rank}${suit}` as Card));
  return acc;
}, []);
