### [is](../) > isFiniteNum

```js
isFiniteNum(value)
```

Checks if `value` is a finite number.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is a finite number, else returns `false`.

#### Examples
```js
isFiniteNum(Infinity);
// -> false

isFiniteNum(NaN);
// -> false

isFiniteNum(-Infinity);
// -> false

isFiniteNum(0);
// -> true

isFiniteNum(2e64);
// -> true

isFiniteNum(null);
// -> false

isFiniteNum(undefined);
// -> false

isFiniteNum('0');
// -> false
```
