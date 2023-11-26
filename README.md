# Deck of Card Types

A collection of TypeScript types and basic introspection functions pertaining to a deck of cards.

## Installation

Add `@poker-apprentice/types` as a dependency.

- yarn:
  ```bash
  yarn add @poker-apprentice/types
  ```
- npm:
  ```bash
  npm install @poker-apprentice/types --save
  ```

## Usage

### Types

#### `Rank`

Any string that represents a card's rank (i.e.: "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", or "A").

```ts
import type { Rank } from '@poker-apprentice/types';
const rank: Rank = 'J'; // jack
```

#### `Suit`

Any string that represents a card's suit.

- "c" = clubs ♣
- "d" = diamonds ♦
- "h" = hearts ♥
- "s" = spades ♠

```ts
import type { Suit } from '@poker-apprentice/types';
const suit: Suit = 'c'; // clubs
```

#### `Card`

A 2-character string representing the rank & suit of a card. (e.g.: "Ts" for the 10 of spades).

```ts
import type { Card } from '@poker-apprentice/types';
const card: Card = 'Kd'; // king of diamonds
```

#### `Hand`

An array of cards.

```ts
import type { Hand } from '@poker-apprentice/types';
const hand: Hand = [
  'Ad', // ace of diamonds
  'Qh', // queen of hearts
  '3s', // three of spades
  '5d', // five of diamonds
  'Th', // ten of hearts
];
```

#### `HandStrength`

All possible high hand strengths in a standard game of poker.

```ts
import { HandStrength } from '@poker-apprentice/types';
console.log(HandStrength.HighCard);      // 0
console.log(HandStrength.OnePair);       // 1
console.log(HandStrength.TwoPair);       // 2
console.log(HandStrength.ThreeOfAKind);  // 3
console.log(HandStrength.Straight);      // 4
console.log(HandStrength.Flush);         // 5
console.log(HandStrength.FullHouse);     // 6
console.log(HandStrength.FourOfAKind);   // 7
console.log(HandStrength.StraightFlush); // 8
console.log(HandStrength.RoyalFlush);    // 9
```

### Functions

#### `isRank`

Determines if a string is a valid representation of a `Rank`, acting as a [type guard](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates).

```ts
console.log(isRank('A')); // true
console.log(isRank('K')); // true

console.log(isRank('a')); // false -- only uppercase "A" accepted as rank
console.log(isRank('P')); // false -- "P" is not a rank
console.log(isRank('hello')); // false
```

#### `isSuit`

Determines if a string is a valid representation of a `Suit`, acting as a [type guard](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates).

```ts
console.log(isSuit('s')); // true
console.log(isSuit('d')); // true

console.log(isSuit('S')); // false -- only lowercase "s" accepted as rank
console.log(isSuit('p')); // false -- "p" is not a suit
console.log(isSuit('hello')); // false
```

#### `isCard`

Determines if a string is a valid representation of a `Card`, acting as a [type guard](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates).

```ts
console.log(isCard('As')); // true
console.log(isCard('Kd')); // true

console.log(isCard('AS')); // false -- only lowercase "s" accepted as suit
console.log(isCard('Kp')); // false -- "p" is not a suit
console.log(isCard('10h')); // false -- rank 10 must be represented as "T"
console.log(isCard('hello')); // false
```

#### `assertCard`

A more rigid implementation of `isCard`, throwing if the provided string value is not a valid representation of a `Card`, and acting as an [assertion type guard](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions).

```ts
const cards = ['As', 'Kd', '5h', '2c'].map(assertCard);
// `cards` is typed as `Card[]` with all values provided

try {
  assertCard('10c');
} catch (err) {
  console.log(err);
}
// outputs error of type `InvalidCardError` with message: Invalid card: "10c"
```

#### `getRank`

Extracts the `Rank` type value from a `Card`.

```ts
console.log(getRank('As')); // "A"
console.log(getRank('Th')); // "T"
console.log(getRank('6d')); // "6"
```

#### `getSuit`

Extracts the `Suit` type value from a `Card`.

```ts
console.log(getRank('As')); // "s"
console.log(getRank('Th')); // "h"
console.log(getRank('6d')); // "d"
```

### Constants

#### `ALL_CARDS`

An array of all possible `Card` values.

#### `ALL_RANKS`

An array of all possible `Rank` values.

#### `ALL_SUITS`

An array of all possible `Suit` values.

## License

MIT

## Contributing

If you'd like to fix a bug, add a feature, improve the documentation, or anything else to better this library, pull requests are welcomed!

1. Clone the repository:
   ```bash
   git clone git@github.com:poker-apprentice/types.git
   ```
1. Install dependencies:
   ```bash
   yarn install
   ```
1. Include tests for your changes, and open a pull request.

If you are interested in contributing, but you are stuck or lost at any point in your efforts, please reach out for help!
