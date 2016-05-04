### [Numbers](../) > randomBetween

```js
randomBetween(min, max [, floatPoint])
```

Returns a pseudo-random number (integer or floating-point) between a min (inclusive) and a max (exclusive) value.

#### Arguments

- `min` _(number)_: The minimum value of the range.

- `max` _(number)_: The maximum value of the range.

- `[floatPoint]` _(boolean)_: Optional. Default is undefined (falsy). If true the returned number will be floating-point.

#### Examplea
```js
randomBetween(3, 8);
// -> Any integer between 3 (inclusive) and 8 (exclusive). eg 3, 4, 5, 6, 7

randomBetween(3, 8, true);
// -> Any floating-point number between 3 (inclusive) and 8 (exclusive). eg 6.362311312365572
```
