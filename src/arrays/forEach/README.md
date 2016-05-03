### [Arrays](../) > forEach

```js
forEach(array, callback [, thisArg])
```

Executes a provided callback function once per array element. To break from the iteration at any time, have the callback return `false`.

#### Arguments

- `array` _(array)_: The array to iterate over.

- `callback` _(function)_: The callback function to execute per array element.

- `[thisArg]` _(object)_: Optional. Value to use as `this` when executing callback.

#### Examples
```js
var arr = ['a', 'b', 'c', 'd', 'e'];

forEach(arr, function (item, index, obj) {
    console.log(item);
});
// -> a, b, c, d, e

forEach(arr, function (item, index, obj) {
    console.log(index);
});
// -> 0, 1, 2, 3, 4

forEach(arr, function (item, index, obj) {
    console.log(item);
    if (item === 'c') {
        return false;
    }
});
// -> a, b, c

forEach(arr, function (item, index, obj) {
    console.log(this);
    return false;
}, arr);
// =>  ["a", "b", "c", "d", "e"]
```
