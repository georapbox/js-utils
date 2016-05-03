### [is](../) > isBoolean

```js
isBoolean(value)
```

Checks if `value` is a boolean value.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is boolean, else returns `false`.

#### Examples
```js
isBoolean(true);
// -> true

isBoolean(false);
// -> true

isBoolean({a: 'a'});
// -> false

isBoolean(null);
// -> false
```
