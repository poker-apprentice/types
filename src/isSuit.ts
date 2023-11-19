import { ALL_SUITS } from './constants';
import type { Suit } from './types';

/**
 * Determines if a string represents a valid {@link Suit} type.
 * @param {string} str Any string value.
 * @returns {boolean} True if `str` represents a valid {@link Suit} type, false otherwise.
 */
export const isSuit = (str: string): str is Suit =>
  str.length === 1 && ALL_SUITS.some((suit) => suit === str);
