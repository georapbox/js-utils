### [Numbers](../) > inRange

```js
inRange(num, start, end);
```

> Checks if a number is between start and up to but not including, end.
> If start is greater than end the params are swapped to support negative ranges.

- `num {Number}`

The number to check.

- `start {Number}`

The start of the range.

- `end {Number}`

The end of the range.

#### Example
```js
inRange(3, 2, 4);
// => true

inRange(-3, -2, -6);
// => true

inRange(4, 8, 2);
// => true

inRange(4.5, 8.2, 2.1);
// => true

inRange('4.5', '8.2', '2.1');
// => true (arguments can be cast to type "number")

inRange(4, 8);
// => false (all arguments are required)

inRange(4);
// => false (all arguments are required)

inRange(4, 'b8', 'c2');
// => false (all arguments must be of type "number")
```
