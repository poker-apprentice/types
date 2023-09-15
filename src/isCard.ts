import { ALL_RANKS, ALL_SUITS } from './constants';
import type { Card } from './types';

/**
 * Determines if a string represents a valid {@link Card} type.
 * @param {string} str Any string value.
 * @returns {boolean} True if `str` represents a valid {@link Card} type, false otherwise.
 */
export const isCard = (str: string): str is Card =>
  str.length === 2 && ALL_RANKS.includes(str[0]) && ALL_SUITS.includes(str[1]);
