### [is](../) > isTruthy

```js
isTruthy(value)
```

Checks if `value` is truthy.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is truthy, else returns `false`.

#### Examples
```js
isTruthy(true);
// -> true

isTruthy(' ');
// -> true

isTruthy(1);
// -> true

isTruthy(false);
// -> false

isTruthy('');
// -> false

isTruthy();
// -> false

isTruthy(0);
// -> false

isTruthy(NaN);
// -> false
```
