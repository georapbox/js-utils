### [is](../) > isFalsy

```js
isFalsy(value)
```

Checks if `value` is falsy.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is falsy, else returns `false`.

#### Examples
```js
isFalsy(true);
// -> false

isFalsy(' ');
// -> false

isFalsy(1);
// -> false

isFalsy(false);
// -> true

isFalsy('');
// -> true

isFalsy();
// -> true

isFalsy(0);
// -> true

isFalsy(NaN);
// -> true
```
