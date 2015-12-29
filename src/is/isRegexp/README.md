### [is](../) > isRegexp

```js
isRegexp(value)
```

> Checks if <code>value</code> is a regular expression.

> Returns true is 'value' is regular expression, else returns false.

- <code>value {\*}</code>

The value to check.

#### Example
```js
isRegexp(/^[0-9a-fA-F]+$/); // => true
isRegexp('/^[0-9a-fA-F]+$/'); // => false
```
