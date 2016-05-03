### [is](../) > isArrayLike

```js
isArrayLike(value)
```

Checks if value is array-like.
A value is considered array-like if it’s not a function and has a `value.length` that’s an
integer greater than or equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.

**NOTE:** If an object has a property named `length`, `isArrayLike` returns true.

#### Arguments

- `value` _(*)_: The value to check.

#### Example
```js
function noop() {}

function dummy() {
    return arguments;
}

var args = dummy();


isArrayLike([1, 2, 3]));
// -> true

isArrayLike('abc'));
// -> true

isArrayLike(0));
// -> false

isArrayLike({foo: 'bar'}));
// -> false

isArrayLike(noop));
// -> false

isArrayLike(null));
// -> false

isArrayLike());
// -> false

isArrayLike(document.body.children);
// -> true

isArrayLike(args));
// -> true
```
