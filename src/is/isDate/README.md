### [is](../) > isDate

```js
isDate(value)
```

Checks if `value` is a date.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is a date, else returns `false`.

#### Examples
```js
isDate(new Date());
// -> true

isDate(new Date().getTime());
// -> false
```
