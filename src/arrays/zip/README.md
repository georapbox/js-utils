### [Arrays](../) > zip

```js
zip([, args...])
```
Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.

#### Arguments

- `[args...]` _(array)_: The arrays to process.

#### Returns

_(array)_: The result array.

**NOTE:** To support legacy browsers, use [`Array.prototype.map`](https://github.com/georapbox/jsEssentials/tree/master/src/arrays/polyfills#arrays--arrayprototypemap) and [`Array.prototype.reduce`](https://github.com/georapbox/jsEssentials/tree/master/src/arrays/polyfills#arrays--arrayprototypereduce) polyfills.

#### Example(s)
```js
zip([1, 2, 3], [11, 22, 33], [111, 222, 333]);
// -> [ [1, 11, 111], [2, 22, 222], [3, 33, 333] ]

zip([1, 2, 3], [11, 22, 33], [111, 222]);
// -> [ [1, 11, 111], [2, 22, 222], [3, 33, undefined] ]

zip([1, 2, 3], [11, 22, 33], [111, 222]);
// -> [ [1, 11, 111], [2, 22, undefined], [3, undefined, undefined] ]

zip([], []);
// -> []

zip();
// -> []
```
