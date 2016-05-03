### [is](../) > isArray

```js
isArray(value)
```

Checks if `value` is array.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is an array, else returns `false`.

The value to check.

#### Example
```js
isArray(['a', 'b', 'c', 'd']);
// -> true

isArray(100);
// -> false

isArray('Lorem ipsum dolor sit amet');
// -> false

isArray({ a: 'a', b: 'b' });
// -> false
```
