### [Arrays](../) > forEach

```js
forEach(array, callback [, thisArg])
```

> Executes a provided callback function once per array element.
> To break from the iteration at any time, have the callback <code>return false</code>.

- <code>array {array}</code>

The array to iterate over.

- <code>callback {function}</code>

The callback function to execute per array element.

- <code>[thisArg] {object}</code>

Value to use as <code>this</code> when executing callback.

#### Example
```js
var arr = ['a', 'b', 'c', 'd', 'e'];

forEach(arr, function (item, index, obj) {
    console.log(item);
});
// => a, b, c, d, e

forEach(arr, function (item, index, obj) {
    console.log(index);
});
// => 0, 1, 2, 3, 4

forEach(arr, function (item, index, obj) {
    console.log(item);
    if (item === 'c') {
        return false;
    }
});
// => a, b, c

forEach(arr, function (item, index, obj) {
    console.log(this);
    return false;
}, arr);
// =>  ["a", "b", "c", "d", "e"]
```
