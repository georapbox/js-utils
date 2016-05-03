### [is](../) > isUndefined

```js
isUndefined(value)
```

Checks if `value` is `undefined`.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is undefined, else returns `false`.

#### Examples
```js
var foo;

isUndefined(foo);
// -> true

isUndefined(null);
// -> false

isUndefined({foo: 'bar'});
// -> false

isUndefined();
// -> true
```
