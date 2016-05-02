### [is](../) > isArrayLike

```js
isArrayLike(value)
```

> Checks if value is array-like.
A value is considered array-like if it’s not a function and has a `value.length` that’s an
integer greater than or equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.

- `value {*}`

The value to check.

#### Example
```js
function noop() {}

isArrayLike([1, 2, 3]));
// -> true

isArrayLike('abc'));
// -> true

isArrayLike(noop));
// -> false

isArrayLike(null));
// -> false

isArrayLike());
// -> false

isArrayLike(document.body.children);
// -> true

// Inside a function's body
isArrayLike(arguments));
// -> true
```
