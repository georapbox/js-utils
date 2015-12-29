### [is](../) > isUndefined

```js
isUndefined(value)
```

> Checks if <code>value</code> is undefined.

> Returns true is 'value' is undefined, else returns false.

- <code>value {\*}</code>

The value to check.

#### Example
```js
var foo;

isUndefined(foo); // => true
isUndefined(null); // => false
isUndefined({a: 'a'}); // => false
isUndefined(); // => true
```
