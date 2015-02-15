##isObject
>Checks if <code>value</code> is the language type of <code>Object</code>.

####Syntax
```js
isObject(value)
```

- <code>value {*}</code>

The value to check.

####Example
```js
isObject({}); // => true
isObject(function test() {}); // => true
isObject([1, 2, 3]); // => true
isObject('Hello World!'); // => false
isObject(false); // => false
isObject(new String('Hello world')); // => true
isObject(); // => undefined
```