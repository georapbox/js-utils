### [Arrays](../) > shuffle

```js
shuffle(array)
```

**NOTE:** Prior to v1.3.3, `shuffle` used to process and alter the original array. Now returns a new copy of the original source array leaving the last one intact for purity.

> Returns a new array with its elements' order randomeized, using the Fisher-Yates (aka Knuth) Shuffle algorithm.

- <code>array {array}</code>

The original array to shuffle.

#### Example
```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


var shuffled = shuffle(arr);
console.log(shuffled); // => [ 'b', 'f', 'h', 'e', 'd', 'c', 'g', 'a' ]
console.log(arr);      // => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
```
