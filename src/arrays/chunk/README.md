<a name="chunk"></a>

## chunk(array, [size]) ⇒ <code>Array</code>
Creates an array of elements split into groups the length of `size`.
If array can’t be split evenly, the final chunk will be the remaining elements.

**Kind**: global function  
**Returns**: <code>Array</code> - The new array containing chunks. If `size` is lower than 1, an empty array is returned.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to process. |
| [size] | <code>Number</code> | <code>0</code> | Optional. The length of each chunk. If a float number, it is converted to integer using `parseInt`. |

**Example**  
```js
chunk([1, 2, 3, 4], 2);
// -> [[1, 2], [3, 4]]

chunk([1, 2, 3, 4, 5], 2);
// -> [[1, 2], [3, 4], [5]]

chunk([1, 2, 3, 4, 5], -1);
// -> []

chunk([1, 2, 3, 4, 5]);
// -> []

chunk([1, 2, 3, 4, 5], null);
// -> []

chunk([1, 2, 3, 4], 3);
// -> [[1, 2, 3], [4]]

chunk([1, 2, 3, 4], '3');
// -> [[1, 2, 3], [4]]

chunk([1, 2, 3, 4], Infinity);
// -> [[1, 2, 3, 4]]

chunk([1, 2, 3, 4], -Infinity);
// -> []

chunk([1, 2, 3, 4], 2.7);
// -> [[1, 2], [3, 4]]

chunk([1, 2, 3, 4], 'test');
// -> []
```
