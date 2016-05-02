### [is](../) > isInfiniteNum

```js
isInfiniteNum(value)
```

> Checks if <code>value</code> is an infinite number.

> Returns true if 'value' is an infinite number, else returns false.

- `value {Number}`

The number to check if infinite.

#### Example
```js
isInfiniteNum(Infinity);
// -> true

isInfiniteNum(NaN);
// -> false

isInfiniteNum(-Infinity);
// -> true

isInfiniteNum(0);
// -> false

isInfiniteNum(2e64);
// -> false

isInfiniteNum(null);
// -> false

isInfiniteNum(undefined);
// -> false

isInfiniteNum('0');
// -> false
```
