import type { Card } from './types';

/**
 * Error class that denotes a provided value does not represent a valid {@link Card}.
 */
export class InvalidCardError extends Error {
  constructor(cardString: string) {
    super(`Invalid card: "${cardString}"`);
  }
}
