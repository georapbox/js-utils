### [is](../) > isNull

```js
isNull(value)
```

Checks if `value` is `null`.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is null, else returns `false`.

#### Examples
```js
isNull(null);
// -> true

isNull(true);
// -> false

isNull({a: 'a'});
// -> false

isNull();
// -> false
```
