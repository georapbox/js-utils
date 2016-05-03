### [Arrays](../) > shuffle

```js
shuffle(array)
```

Creates a new array with its elements' order randomeized, using the Fisher-Yates (aka Knuth) Shuffle algorithm.

#### Arguments

- `array` _(array)_: The original array to shuffle.

#### Returns

_(array)_: A new shuffled array.

#### Example
```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


var shuffled = shuffle(arr);
console.log(shuffled); // => [ 'b', 'f', 'h', 'e', 'd', 'c', 'g', 'a' ]
console.log(arr);      // => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
```
