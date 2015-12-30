### [is](../) > isFalsy

```js
isFalsy(value)
```

> Checks if <code>value</code> is falsy.

> Returns true is 'value' is falsy, else returns false.

- <code>value {\*}</code>

The value to check.

#### Example
```js
isFalsy(true); // => false
isFalsy(' '); // => false
isFalsy(1); // => false
isFalsy(false); // => true
isFalsy(''); // => true
isFalsy(); // => true
isFalsy(0); // => true
isFalsy(NaN); // => true
```
