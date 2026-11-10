<a name="remove"></a>

## remove(array, ...indexes) ⇒ <code>Array</code>
Creates a new array excluding elements at the specified indices.

Indices refer to positions in the original array. Duplicate, negative,
fractional, and out-of-range indices are ignored, as are non-number values.
The order of remaining elements is preserved.
Sparse array holes are treated as `undefined` values.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array containing the remaining elements.  
**Throws**:

- <code>TypeError</code> If the first argument is not an array.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |
| ...indexes | <code>number</code> | The indices of the elements to remove. |

**Example**  
```js
remove([1, 2, 3, 4, 5], 0, 4);
// => [2, 3, 4]

remove([1, 2, 3, 4, 5], 1, 3);
// => [1, 3, 5]

remove([1, 2, 3], 1, 1, -1);
// => [1, 3]

remove([1, 2, 3], 10);
// => [1, 2, 3]

remove([1, , 3], 0);
// => [undefined, 3]
```
