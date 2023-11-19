import { ALL_RANKS } from './constants';
import type { Rank } from './types';

/**
 * Determines if a string represents a valid {@link Rank} type.
 * @param {string} str Any string value.
 * @returns {boolean} True if `str` represents a valid {@link Rank} type, false otherwise.
 */
export const isRank = (str: string): str is Rank =>
  str.length === 1 && ALL_RANKS.some((rank) => rank === str);
