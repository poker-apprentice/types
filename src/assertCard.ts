import { InvalidCardError } from './InvalidCardError';
import { isCard } from './isCard';
import type { Card } from './types';

/**
 * Returns true if a string represents a valid {@link Card} type, otherwise throws.
 * @param {Card} card A string that should represent a {@link Card} type.
 * @returns {boolean} True.
 * @throws {InvalidCardError} if the provided string is not a valid {@link Card} type.
 */
export const assertCard = (card: string): card is Card => {
  if (!isCard(card)) {
    throw new InvalidCardError();
  }
  return true;
};
