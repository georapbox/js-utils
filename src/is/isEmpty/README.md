### [is](../) > isEmpty

```js
isEmpty(value)
```

> Checks if `value` is empty.

> Arrays, strings, or arguments objects with a length of 0 and plain objects containing no own enumerable or inherited from prototypes properties are considered "empty".

**NOTE:** In case of objects, the argument should always be a plain JavaScript Object as other types of object (DOM elements, primitive strings/numbers, host objects) may not give consistent results across browsers.

- `value {*}`

The value to check.

#### Example
```js
isEmpty(['a', 'b', 'c', 'd']);
// -> false

isEmpty('Lorem ipsum dolor sit amet');
// -> false

isEmpty({ a: 'a', b: 'b' });
// -> false

isEmpty([]);
// -> true

isEmpty('');
// -> true

isEmpty(' ');
// -> false

isEmpty({});
// -> true

isEmpty(Object.create(null));
// -> true

isEmpty(Object.create({}));
// -> true

isEmpty(Object.create({foo: 'bar'}));
// -> false (inherits from proptotype)

var obj = {};
Object.defineProperty(obj, 'hidden', {
    value: null,
    enumerable: false
});
isEmpty(obj);
// -> true ('hidden' is non-enumerable)
```
