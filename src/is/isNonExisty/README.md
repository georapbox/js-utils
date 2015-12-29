### [is](../) > isNonExisty

```js
isNonExisty(value)
```

> Checks if <code>value</code> is non existy (null or undefined).

> Returns true is 'value' is non existy, else returns false.

- <code>value {\*}</code>

The value to check.

#### Example
```js
var foo;

isNonExisty(foo); // => true
isNonExisty(null); // => true
isNonExisty({foo: 'bar'}); // => false
isNonExisty(); // => true
```
