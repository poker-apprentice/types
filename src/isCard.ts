import { isRank } from './isRank';
import { isSuit } from './isSuit';
import type { Card } from './types';

/**
 * Determines if a string represents a valid {@link Card} type.
 * @param {string} str Any string value.
 * @returns {boolean} True if `str` represents a valid {@link Card} type, false otherwise.
 */
export const isCard = (str: string): str is Card =>
  str.length === 2 && isRank(str[0]) && isSuit(str[1]);
