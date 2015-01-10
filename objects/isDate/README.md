##isDate
>Checks if 'value' is a date.

>Returs true if value is a date.

####Syntax
```js
isDate(value)
```

- <code>value</code>

The value to check.

####Example
```js
isDate(new Date()); // => true
isDate(new Date().getTime()); // => false
```