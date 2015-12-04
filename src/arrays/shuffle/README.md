### [Arrays](../) > shuffle

```js
shuffle(array)
```

> Randomize array element order in-place, using the Fisher-Yates (aka Knuth) Shuffle algorithm.

> **NOTE:** Although it does return the array for convenience, the shuffle is done in-place. So if you do not want to modify the original array, make a copy of it first with ```.slice(0)```.

- <code>array {array}</code>

The array to shuffle.

#### Example
```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// Modify the original array
shuffle(arr); // => [ "b", "f", "h", "e", "d", "c", "g", "a" ]

// Copy the array
var newArr = arr.slice(0);
shuffle(newArr);
```
