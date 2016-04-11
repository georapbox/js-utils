### [is](../) > isPlainObject

```js
isPlainObject(value)
```

> Checks if `value` is a plain object, i.e. is constructed by the built-in Object constructor and inherits directly from `Object.prototype` or `null`.

- <code>value {\*}</code>

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

isPlainObject(new Foo());
// -> false

isPlainObject(Object.create(null));
// -> true

isPlainObject(Object.create({}));
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
