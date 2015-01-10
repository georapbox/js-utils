##isArray
>Checks if 'value' is array.

>Returns true if 'value' is an array, else returns false.

####Syntax
```js
isArray(value)
```

- <code>value</code>

The value to check.

####Example
```js
isArray(['a', 'b', 'c', 'd']); // => true
isArray(100); // => false
isArray('Lorem ipsum dolor sit amet'); // => false
isArray({ a: 'a', b: 'b' }); // => false
```