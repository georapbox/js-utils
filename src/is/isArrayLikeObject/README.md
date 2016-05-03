### [is](../) > isArrayLikeObject

```js
isArrayLikeObject(value)
```

> Checks if value is array-like and object as well.
A value is considered array-like if it’s not a function and has a `value.length` that’s an
integer greater than or equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.

- `value {*}`

The value to check.

#### Example
```js
function noop() {}

function dummy() {
    return arguments;
}

var args = dummy();


isArrayLikeObject([1, 2, 3]));
// -> true

isArrayLikeObject('abc'));
// -> false

isArrayLikeObject(0));
// -> false

isArrayLikeObject({foo: 'bar'}));
// -> false

isArrayLikeObject(noop));
// -> false

isArrayLikeObject(null));
// -> false

isArrayLikeObject());
// -> false

isArrayLikeObject(document.body.children);
// -> true

isArrayLikeObject(args));
// -> true
```
