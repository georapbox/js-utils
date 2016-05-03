### [Arrays](../) > filter

```js
filter(array, callback [, thisArg])
```

Creates a new array with all elements that pass the test implemented by the provided callback function.

#### Arguments

- `array` _(array)_: The array to iterate over.

- `callback` _(function)_: The callback function to test each element of the array.

- `[thisArg]` _(object)_: Optional. Value to use as `this` when executing callback.

#### Returns

_(array)_: Returns the new filtered array.

#### Examples
```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];

filter(arr, function (item, index, obj) {
    return typeof item === 'string';
});
// -> ['a', 'b', 'c']

filter(arr, function (item, index, obj) {
    return item.a === 'b' || item === 2;
});
// -> [{a: 'b'}, 2]
```
