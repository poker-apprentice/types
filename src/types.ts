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
