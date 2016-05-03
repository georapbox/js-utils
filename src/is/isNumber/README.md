### [is](../) > isNumber

```js
isNumber(value)
```

Checks if `value` is a number.

***NOTE:*** `NaN` is considered a number, as so will return `true`.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is number, else returns `false`.

#### Examples
```js
isNumber(10);
// -> true

isNumber('10');
// -> false

isNumber(new Date());
// -> false

isNumber(new Date().getTime());
// -> true

isNumber(true);;
// -> false

isNumber(null);;
// -> false

isNumber(undefined);;
// -> false

isNumber('');
// -> false

isNumber(NaN);
// -> true
```
