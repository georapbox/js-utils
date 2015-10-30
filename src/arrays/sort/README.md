### [Arrays](../) > sort

```js
sort(arr [, ascending])
```

> Sorts an **array of primitive values**.

- <code>arr {array}</code>

The array to sort.

- <code>[ascending] {boolean}</code>

The sorting order. Default is true (ascending).

#### Example
```js
sort(['Delta', 'Omega', 'alpha', 'CHARLIE', 'lorem', 'bravo']); // => ['alpha', 'bravo', 'CHARLIE', 'Delta', 'lorem', 'Omega']
sort(['Delta', 'Omega', 'alpha', 'CHARLIE', 'lorem', 'bravo'], false); // => ['Omega', 'lorem', 'Delta', 'CHARLIE', 'bravo', 'alpha']
sort([4, 6, 2, 9, 100, 321, -2, 99], true); // => [-2, 2, 4, 6, 9, 99, 100, 321]
sort([4, 6, 2, 9, 100, 321, -2, 99], false); // => [321, 100, 99, 9, 6, 4, 2, -2]
sort([4, 6, undefined, 2, 9, -10, 100, 321, -2, null, 99], true); // => [-10, -2, undefined, null, 2, 4, 6, 9, 99, 100, 321]
sort([4, 6, undefined, 2, 9, -10, 100, 321, -2, null, 99], false); // => [321, 100, 99, 9, 6, 4, 2, undefined, null, -2, -10]
```
