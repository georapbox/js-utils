##isBoolean
>Checks if 'value' is a boolean value.

>Returns true is 'value' is boolean, else returns false.

####Syntax
```js
isBoolean(value)
```

- <code>value</code>

The value to check.

####Example
```js
isBoolean(true); // => true
isBoolean(false); // => true
isBoolean({ a: 'a' }); // => false
isBoolean(null); // => false
```