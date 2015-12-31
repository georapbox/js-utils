### [is](../) > isNumber

```js
isNumber(value)
```

> Checks if <code>value</code> is a number.

> Note: <code>NaN</code> is considered a number as <code>typeof NaN === 'number'</code>,
but as it goes against the point of the check it was decided to return false for <code>NaN</code>.

- <code>value {\*}</code>

The value to check.

#### Example
```js
isNumber(10) // => true
isNumber('10') // => false
isNumber(new Date()) // => false
isNumber(new Date().getTime()) // => true
isNumber(true); // => false
isNumber(null); // => false
isNumber(undefined); // => false
isNumber('') // => false
isNumber(NaN) // => false
```
