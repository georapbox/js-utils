### [Arrays](../) > diff

```js
diff(arrA [, arrB])
```

Returns an array with only the unique values from the first array, by excluding all values from the second array using strict equality for comparisons.

#### Arguments

- `arrA` _(array)_: The array to process.

- `[arrB]` _(array)_: Optional. Array of values to exclude from the original array.

#### Returns

_(array)_: Returns the new array with values not included in the exclusion set.

#### Examples
```js
var obj = {
    foo: 'bar'
};

var a = [1, 2, 3, 4, 5, obj],
    b = [5, 2, 10, obj];

diff(a, b);
// -> [1, 3, 4]

diff(a, []);
// -> [1, 2, 3, 4, 5, obj]

diff(a);
// -> [1, 2, 3, 4, 5, obj]
```
