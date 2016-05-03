### [is](../) > isNonExisty

```js
isNonExisty(value)
```

Checks if `value` is non existy (null or undefined).

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value non existy, else returns `false`.

#### Examples
```js
var foo;

isNonExisty(foo);
// -> true

isNonExisty(null);
// -> true

isNonExisty({foo: 'bar'});
// -> false

isNonExisty();
// -> true
```
