### [is](../) > isHexadecimal

```js
isHexadecimal(value)
```

> Checks if <code>value</code> matches a hexadecimal regular expression.

- <code>value {\*}</code>

The value to check.

#### Example
```js
isHexadecimal('f5f5f5') // => true
isHexadecimal('9c0') // => true
isHexadecimal(333) // => true
isHexadecimal('foo') // => false
isHexadecimal(6.6) // => false
```
