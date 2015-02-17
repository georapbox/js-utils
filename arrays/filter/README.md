##filter
>Creates a new array with all elements that pass the test implemented by the provided callback function.

>[[Source code]](filter.js)

####Syntax
```js
filter(array, callback [, thisArg])
```

- <code>array {Array}</code>

The array to iterate over.

- <code>callback {Function}</code>

The callback function to test each element of the array.

- <code>[thisArg] {Object}</code>

Value to use as <code>this</code> when executing callback.

####Example
```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];

filter(arr, function (item, index, obj) {
    return typeof item === 'string';
});
// => ['a', 'b', 'c']

filter(arr, function (item, index, obj) {
    return item.a === 'b' || item === 2;
});
// => [{a: 'b'}, 2]
```