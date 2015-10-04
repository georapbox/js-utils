### [Objects](../) > isPlainObject

```js
isPlainObject(value)
```

> Checks if <code>value</code> is an object created by the <code>Object</code> constructor.

- <code>value {\*}</code>

The value to check.

#### Example
```js
function Foo() {
    this.a = 1;
}

isPlainObject({}); // => true
isPlainObject({foo: 'bar'}); // => true
isPlainObject(new Foo()); // => false
isPlainObject(Object.create(null)); // => false
isPlainObject(Object.create({})); // => true
isPlainObject([1, 2, 3]); // => false
isPlainObject(); // => false
```
