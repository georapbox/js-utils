### [is](../) > isHexColor

```js
isHexColor(value)
```

Checks if `value` matches a hex color eexpression.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is a hex color expression, else returns `false`.

#### Examples
```js
isHexColor('#f5f5f5');
// -> true

isHexColor('#9c0');
// -> true

isHexColor('333');
// -> true

isHexColor(333);
// -> true

isHexColor(6.6);
// -> false

isHexColor('foo');
// -> false

isHexColor(null);
// -> false

isHexColor();
// -> false
```
