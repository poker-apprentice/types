import type { Card, Rank, Suit } from './types';

type AtLeastOne<T> = [T, ...T[]];

// Ensures an array contains every possible value of a string union.
const exhaustiveStringTuple =
  <T extends string>() =>
  <L extends AtLeastOne<T>>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...x: L extends never
      ? never
      : Exclude<T, L[number]> extends never
      ? L
      : Exclude<T, L[number]>[]
  ) =>
    x;

export const ALL_RANKS: Rank[] = exhaustiveStringTuple<Rank>()(
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
);

export const ALL_SUITS: Suit[] = exhaustiveStringTuple<Suit>()('c', 'd', 'h', 's');

export const ALL_CARDS = ALL_RANKS.reduce((acc: Card[], rank) => {
  acc.push(...ALL_SUITS.map((suit) => `${rank}${suit}` as Card));
  return acc;
}, []);
