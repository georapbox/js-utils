##randomBetween
>Returns a pseudo-random number (integer or floating-point) between a min (inclusive) and a max (exclusive) value.

####Syntax
```js
randomBetween(min, max, [floatPoint])
```

- <code>min {Number}</code>

The minimum value of the range.

- <code>max {Number}</code>

The maximum value of the range.

- <code>[floatPoint] {Boolean}</code>

Optional. If true the returned number will be floating-point. Default is undefined (falsey).

####Example
```js
randomBetween(3, 8);
// => Any integer between 3 (inclusive) and 8 (exclusive). eg 3, 4, 5, 6, 7

randomBetween(3, 8, true);
// => Any floating-point number between 3 (inclusive) and 8 (exclusive). eg 6.362311312365572
```