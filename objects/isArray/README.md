##isArray
>Returns true if an object is an array, else returns false.

####Syntax
```js
isArray(obj)
```

- <code>obj</code>

The object to check if is array.

####Example
```js
isArray(['a', 'b', 'c', 'd']); // => true
isArray(100); // => false
isArray('Lorem ipsum dolor sit amet'); // => false
isArray({ a: 'a', b: 'b' }); // => false
```