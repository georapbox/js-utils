### [is](../) > isInteger

```js
isInteger(value)
```

Checks if `value` is an integer.<br>
If the target value is an integer, return true, otherwise return false. If the value is NaN or infinite, return false.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is an integer number, else returns `false`.

#### Examples
```js
isInteger(1);
// -> true

isInteger(9007199254740992);
// -> true

isInteger(-9007199254740992);
// -> true

isInteger(-100000);
// -> true

isInteger(0);
// -> true

isInteger(0.1);
// -> false

isInteger(Math.PI);
// -> false

isInteger(NaN);
// -> false

isInteger('10');
// -> false

isInteger(Number.MAX_VALUE);
// -> false

isInteger(Infinity);
// -> false
```
