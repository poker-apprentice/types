import { ALL_SUITS } from './constants';
import { isSuit } from './isSuit';

describe('isSuit', () => {
  it.each(ALL_SUITS)('returns true for %s', (suitString) => {
    expect(isSuit(suitString)).toBe(true);
  });

  it.each([['invalid'], ['p'], ['S']])('returns false for %s', (suitString) => {
    expect(isSuit(suitString)).toBe(false);
  });
});
