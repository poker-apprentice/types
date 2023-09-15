import { ALL_CARDS } from './constants';
import { isCard } from './isCard';

describe('isCard', () => {
  it.each(ALL_CARDS)('returns true for %s', (cardString) => {
    expect(isCard(cardString)).toBe(true);
  });

  it.each([['invalid'], ['Kx'], ['AS']])('returns false for %s', (cardString) => {
    expect(isCard(cardString)).toBe(false);
  });
});
