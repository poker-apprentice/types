import type { Card, Rank, Suit } from './types';

export const ALL_RANKS: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

export const ALL_SUITS: Suit[] = ['c', 'd', 'h', 's'];

export const ALL_CARDS = ALL_RANKS.reduce((acc: Card[], rank) => {
  acc.push(...ALL_SUITS.map((suit) => `${rank}${suit}` as Card));
  return acc;
}, []);
