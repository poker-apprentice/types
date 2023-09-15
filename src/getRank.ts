import { InvalidCardError } from './InvalidCardError';
import { isCard } from './isCard';
import type { Card, Rank } from './types';

/**
 * Returns the {@link Rank} of the provided string if it represents a valid {@link Card} type.
 * @param {Card} card A string that should represent a {@link Card} type.
 * @returns {boolean} The {@link Rank} of the card.
 * @throws {InvalidCardError} if the provided string is not a valid {@link Card} type.
 */
export const getRank = (card: string): Rank => {
  if (!isCard(card)) {
    throw new InvalidCardError(card);
  }
  return card[0] as Rank;
};
