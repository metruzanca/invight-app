<!-- https://basarat.gitbook.io/typescript/main-1/barrel -->

# Barrels
A barrel is a way to rollup exports from several modules into a single convenient module. The barrel itself is a module file that re-exports selected exports of other modules.

Imagine the following class structure in a library:

```js
// demo/foo.ts
export class Foo {}

// demo/bar.ts
export class Bar {}

// demo/baz.ts
export class Baz {}
```

Without a barrel, a consumer would need three import statements:
```js
import { Foo } from '../demo/foo';
import { Bar } from '../demo/bar';
import { Baz } from '../demo/baz';
```

You can instead add a barrel demo/index.ts containing the following:
```js
// demo/index.ts
export * from './foo'; // re-export all of its exports
export * from './bar'; // re-export all of its exports
export * from './baz'; // re-export all of its exports
```

Now the consumer can import what it needs from the barrel:

```js
import { Foo, Bar, Baz } from '../demo'; // demo/index.ts is implied
```

> When making a barrel, its best to keep the exports in alphabetical order to avoid duplicate/missing exports.
