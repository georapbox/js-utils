### [is](../) > isHexadecimal

```js
isHexadecimal(value)
```

Checks if `value` matches a hexadecimal regular expression.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is a hexadecimal expression, else returns `false`.

#### Examples
```js
isHexadecimal('f5f5f5');
// -> true

isHexadecimal('9c0');
// -> true

isHexadecimal(333);
// -> true

isHexadecimal('foo');
// -> false

isHexadecimal(6.6);
// -> false
```
