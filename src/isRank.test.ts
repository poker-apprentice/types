import { ALL_RANKS } from './constants';
import { isRank } from './isRank';

describe('isRank', () => {
  it.each(ALL_RANKS)('returns true for %s', (rankString) => {
    expect(isRank(rankString)).toBe(true);
  });

  it.each([['invalid'], ['a'], ['P']])('returns false for %s', (rankString) => {
    expect(isRank(rankString)).toBe(false);
  });
});
