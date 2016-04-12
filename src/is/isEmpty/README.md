### [is](../) > isEmpty

```js
isEmpty(value)
```

> Checks if `value` is empty.

> Arrays, strings, or arguments objects with a length of 0 and plain objects with both own enumerable and inherited from prototypes properties are considered "empty".

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
