import { InvalidCardError } from './InvalidCardError';
import { isCard } from './isCard';
import type { Card, Suit } from './types';

/**
 * Returns the {@link Suit} of the provided string if it represents a valid {@link Card} type.
 * @param {Card} card A string that should represent a {@link Card} type.
 * @returns {Suit} The {@link Suit} of the card.
 * @throws {InvalidCardError} if the provided string is not a valid {@link Card} type.
 */
export const getSuit = (card: string): Suit => {
  if (!isCard(card)) {
    throw new InvalidCardError(card);
  }
  return card[1] as Suit;
};
