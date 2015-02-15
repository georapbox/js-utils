##difference
>Creates an array excluding all values of the provided arrays.

>**NOTE:** For older browsers support (ie IE7, 8), also include the [Array.prototype.filter()](arrays/polyfills#arrayprototypefilter) & [Array.prototype.indexOf()](arrays/polyfills#arrayprototypeindexof).

####Syntax
```js
diff(arrA, arrB)
```

- <code>arrA {Array}</code>

The array to process.

- <code>[arrB] {Array}</code>

Array of values to exclude from the original array.

####Example
```js
var o = {
    a: 'a'
};

var a = [1, 2, 3, 4, 5, o],
    b = [5, 2, 10, o];

diff(a, b); // => Array [1, 3, 4]
diff(a, []); // => Array [1, 2, 3, 4, 5, Object]
diff(a) // => Array []
```