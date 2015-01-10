##isEmpty
>Checks if 'value' is empty.

>Returns true if 'value' is empty, else returns false.

>Arrays, strings, or arguments objects with a length of 0 and objects with no own enumerable properties are considered "empty".

####Syntax
```js
isEmpty(value)
```

- <code>value</code>

The value to check.

####Example
```js
isEmpty(['a', 'b', 'c', 'd']); // => false
isEmpty('Lorem ipsum dolor sit amet'); // => false
isEmpty({ a: 'a', b: 'b' }); // => false
isEmpty([]); // => true
isEmpty(''); // => true
isEmpty({}); // => true

var obj = {};
Object.defineProperty(obj, 'hidden', { value: null, enumerable: false });
isEmpty(obj); // => true ('hidden' is non-enumerable)
```