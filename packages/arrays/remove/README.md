<a name="remove"></a>

## remove(array) ⇒ <code>Array</code>
Removes one or more elements from an array at the specified index(es).

**Returns**: <code>Array</code> - The result array with the elements specified removed.  
**Throws**:

- <code>TypeError</code> If `array` is not array.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The initial array to remove elements from. |
| ...indexes | <code>Number</code> | The index(es) of the elements to be removed. Non numbers are ignored. |

**Example**
```js
const arr = [1, 2, 3, 4, 5];

remove(arr, 0);
// => [2, 3, 4, 5]

remove(arr, 0, 1);
// => [3, 4, 5]

remove(arr, 0, 4);
// => [2, 3, 4]

remove(arr);
// => [1, 2, 3, 4, 5]

remove(arr, arr.length);
// => [1, 2, 3, 4, 5]

remove(arr, arr.length - 1);
// => [1, 2, 3, 4]

remove(arr, NaN);
// => [1, 2, 3, 4, 5]
```
