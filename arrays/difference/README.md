##difference
>Creates an array excluding all values of the provided arrays.

>**NOTE:** For older browsers support (ie IE7, 8), also include the [Array.prototype.filter()](arrays/polyfills#arrayprototypefilter) & [Array.prototype.indexOf()](arrays/polyfills#arrayprototypeindexof).

####Syntax
```js
difference(array, values)
```

- <code>array {Array}</code>

The array to process.

- <code>[values] {Array}</code>

Array of values to exclude from the original array.

####Example
```js
var o = {
    a: 'a'
};

var a = [1, 2, 3, 4, 5, o],
    b = [5, 2, 10, o];

difference(a, b); // => Array [1, 3, 4]
difference(a, []); // => Array [1, 2, 3, 4, 5, Object]
difference(a) // => Array []
```