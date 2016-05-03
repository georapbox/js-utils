### [is](../) > isSafeInteger

```js
isSafeInteger(value)
```

Checks if an integer number is in the safe range, i.e., it is correctly represented by JavaScript (where all numbers, including integer numbers, are technically floating point number).

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is safe integer, else returns `false`.

#### Examples
```js
isSafeInteger(3));
// -> true

isSafeInteger(Math.pow(2, 53)));
// -> false

isSafeInteger(-Math.pow(2, 53))).
// -> false

isSafeInteger(Math.pow(2, 53) - 1));
// -> true

isSafeInteger(NaN));
// -> false

isSafeInteger(Infinity));
// -> false

isSafeInteger('3'));
// -> false

isSafeInteger(3.1));
// -> false

isSafeInteger(3.0));
// -> true
```