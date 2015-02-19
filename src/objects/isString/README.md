##isString
>Checks if 'value' is string.

>Returns true if 'value' is a string, else returns false.

####Syntax
```js
isString(value)
```

- <code>value</code>

The value to check.

####Example
```js
isString(['a', 'b', 'c', 'd']); // ==> false
isString(100); // ==> false
isString('Lorem ipsum dolor sit amet'); // ==> true
isString({ a: 'a', b: 'b' }); // ==> false
```