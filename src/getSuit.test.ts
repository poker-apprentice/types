import { getSuit } from './getSuit';
import { InvalidCardError } from './InvalidCardError';
import type { Suit } from './types';

describe('getSuit', () => {
  it.each([
    { cardString: 'Ac', suit: 'c' satisfies Suit },
    { cardString: 'Ad', suit: 'd' satisfies Suit },
    { cardString: 'Ah', suit: 'h' satisfies Suit },
    { cardString: 'As', suit: 's' satisfies Suit },
  ])('returns the suit for a card with suit $suit', ({ cardString, suit }) => {
    expect(getSuit(cardString)).toEqual(suit);
  });

  it.each([['invalid'], ['Kx'], ['AS']])('throws for value %s', (cardString) => {
    expect(() => getSuit(cardString)).toThrow(InvalidCardError);
  });
});
