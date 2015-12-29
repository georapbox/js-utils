### [is](../) > isNullOrUndefined

```js
isNullOrUndefined(value)
```

> Checks if <code>value</code> is null or undefined.

> Returns true is 'value' is null or undefined, else returns false.

- <code>value {\*}</code>

The value to check.

#### Example
```js
var foo;

isNullOrUndefined(foo); // => true
isNullOrUndefined(null); // => true
isNullOrUndefined({foo: 'bar'}); // => false
isNullOrUndefined(); // => true
```
