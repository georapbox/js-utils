### [is](../) > isString

```js
isString(value)
```

Checks if `value` is string.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is string, else returns `false`.

#### Examples
```js
isString(['a', 'b', 'c', 'd']);
// -> false

isString(100);
// -> false

isString('Lorem ipsum dolor sit amet');
// -> true

isString({ a: 'a', b: 'b' });
// -> false
```
