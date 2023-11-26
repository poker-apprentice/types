/**
 * All possible card ranks in a standard game of poker.
 */
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'T' | 'J' | 'Q' | 'K' | 'A';

/**
 * All possible card suits in a standard game of poker.
 */
export type Suit = 'c' | 'd' | 'h' | 's';

/**
 * All possible cards in a standard game of poker.
 */
export type Card = `${Rank}${Suit}`;

/**
 * An array of cards representing a player's hand.
 */
export type Hand = Card[];

/**
 * All possible high hand strengths in a standard game of poker.
 */
export enum HandStrength {
  HighCard = 0,
  OnePair = 1,
  TwoPair = 2,
  ThreeOfAKind = 3,
  Straight = 4,
  Flush = 5,
  FullHouse = 6,
  FourOfAKind = 7,
  StraightFlush = 8,
  RoyalFlush = 9,
}
