### [Arrays](../) > uniq

```js
uniq(array)
```

Removes duplicate primitive values from an array. Returns a new duplicates-free array.

#### Arguments

- `array` _(array)_: The array to iterate over.

#### Returns

_(array)_: The result array.

#### Example
```js
var arr = ['a', 'a', 'b', true, '2', 2, false, true];

uniq(arr); // -> ['a', 'b', true, '2', 2, false]
```
