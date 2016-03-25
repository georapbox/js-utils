### [Arrays](../) > chunk

```js
chunk(array, [size=0])
```

>  Creates an array of elements split into groups the length of `size`.
> If array can’t be split evenly, the final chunk will be the remaining elements.

- `array {Array}`

The array to process.

- `[size=0] {Number}`

The length of each chunk.<br/>
If `size` is a float number, it is converted to integer using `parseInt`.<br/>
If `size` is lower than 1, an empty array is returned.

#### Example
```js
chunk([1, 2, 3, 4], 2);
// =>  [[1, 2], [3, 4]]

chunk([1, 2, 3, 4, 5], 2);
// =>  [[1, 2], [3, 4], [5]]

chunk([1, 2, 3, 4, 5], -1);
// =>  []

chunk([1, 2, 3, 4, 5]);
// =>  []

chunk([1, 2, 3, 4, 5], null);
// =>  []

chunk([1, 2, 3, 4], 3);
// =>  [[1, 2, 3], [4]]

chunk([1, 2, 3, 4], '3');
// =>  [[1, 2, 3], [4]]

chunk([1, 2, 3, 4], Infinity);
// =>  [[1, 2, 3, 4]]

chunk([1, 2, 3, 4], -Infinity);
// =>  []

chunk([1, 2, 3, 4], 2.7);
// =>  [[1, 2], [3, 4]]

chunk([1, 2, 3, 4], 'test');
// =>  []
```
