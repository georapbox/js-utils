##isString
>Returns true if an object is a string, else returns false.

####Syntax
```js
isString(obj)
```

- <code>obj</code>

The object to check if is string.

####Example
```js
isString(['a', 'b', 'c', 'd']); // ==> false
isString(100); // ==> false
isString('Lorem ipsum dolor sit amet'); // ==> true
isString({ a: 'a', b: 'b' }); // ==> false
```