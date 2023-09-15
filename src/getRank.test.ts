import { getRank } from './getRank';
import { InvalidCardError } from './InvalidCardError';
import type { Rank } from './types';

describe('getRank', () => {
  it.each([
    { cardString: 'Ah', rank: 'A' satisfies Rank },
    { cardString: 'Kh', rank: 'K' satisfies Rank },
    { cardString: 'Qh', rank: 'Q' satisfies Rank },
    { cardString: 'Jh', rank: 'J' satisfies Rank },
    { cardString: 'Th', rank: 'T' satisfies Rank },
    { cardString: '9h', rank: '9' satisfies Rank },
    { cardString: '8h', rank: '8' satisfies Rank },
    { cardString: '7h', rank: '7' satisfies Rank },
    { cardString: '6h', rank: '6' satisfies Rank },
    { cardString: '5h', rank: '5' satisfies Rank },
    { cardString: '4h', rank: '4' satisfies Rank },
    { cardString: '3h', rank: '3' satisfies Rank },
    { cardString: '2h', rank: '2' satisfies Rank },
  ])('returns the rank for a card with rank $rank', ({ cardString, rank }) => {
    expect(getRank(cardString)).toEqual(rank);
  });

  it.each([['invalid'], ['Kx'], ['AS']])('throws for value %s', (cardString) => {
    expect(() => getRank(cardString)).toThrow(InvalidCardError);
  });
});
