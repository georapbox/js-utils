### [is](../) > isRegexp

```js
isRegexp(value)
```

Checks if `value` is a regular expression.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is regualr expression, else returns `false`.

#### Examples
```js
isRegexp(/^[0-9a-fA-F]+$/);
// -> true

isRegexp('/^[0-9a-fA-F]+$/');
// -> false
```
