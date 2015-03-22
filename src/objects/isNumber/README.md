###[Objects](../) > isNumber

```js
isNumber(value)
```

> Checks if <code>value</code> is a number.

> Note: "NaN" is considered a number.

- <code>value {*}</code>

The value to check.

####Example
```js
isNumber(10) // => true
isNumber('10') // => false
isNumber(new Date()) // => false
isNumber(new Date().getTime()) // => true
isNumber(true); // => false
isNumber(null); // => false
isNumber(undefined); // => false
isNumber('') // => false
```