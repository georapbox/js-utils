### [is](../) > isPlainObject

```js
isPlainObject(value)
```

> Checks if `value` is a plain object (created using "{}" or "new Object")

**NOTE:** Use with caution as host objects (or objects used by browser host environments to complete the execution environment of ECMAScript) have a number of inconsistencies which are difficult to robustly feature detect cross-platform.

- `value {*}`

The value to check.

#### Example
```js
function Foo() {
    this.a = 1;
}

isPlainObject({});
// -> true

isPlainObject({foo: 'bar'});
// -> true

isPlainObject(new Object({foo: 'bar'}));
// -> true

isPlainObject(new Foo());
// -> false

isPlainObject(Object.create(null));
// -> true

isPlainObject(Object.create({}));
// -> true

isPlainObject(Object.create({foo: 'bar'}));
// -> true

isPlainObject([1, 2, 3]);
// -> false

isPlainObject(null);
// -> false

isPlainObject();
// -> false

isPlainObject(100);
// -> false

isPlainObject('lorem ipsum');
// -> false
```
