##isEmpty
>Returns true if an object is empty, else returns false.

> - null and undefined are "empty"
- zero length is empty in case of array and string
- No own (enumerable) properties is empty in case of object literals

####Syntax
```js
isEmpty(obj)
```

- <code>obj</code>

The object to check if is empty.

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