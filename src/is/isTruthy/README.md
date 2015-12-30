### [is](../) > isTruthy

```js
isTruthy(value)
```

> Checks if <code>value</code> is truthy.

> Returns true is 'value' is truthy, else returns false.

- <code>value {\*}</code>

The value to check.

#### Example
```js
isTruthy(true); // => true
isTruthy(' '); // => true
isTruthy(1); // => true
isTruthy(false); // => false
isTruthy(''); // => false
isTruthy(); // => false
isTruthy(0); // => false
isTruthy(NaN); // => false
```
