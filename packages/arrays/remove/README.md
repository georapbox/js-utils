<a name="remove"></a>

## remove(array, indexes) ⇒ <code>Array</code>
Removes one or more elements from an array at the specified index(es).

**Returns**: <code>Array</code> - The result array with the elements specified removed.  
**Throws**:

- <code>TypeError</code> If `array` is not array.
- <code>TypeError</code> If `indexes` is not array.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The initial array to remove elements from. |
| indexes | <code>Array.&lt;Number&gt;</code> | An array with the index(es) of the elements to be removed. Non numbers are ignored. Float numbers, are implicitly converted to integers using `Math.floor()`. If negative index(es) passed, will begin that many elements from the end. |

**Example**  
```js
var arr = [1, 2, 3, 4, 5];

remove(arr, [0]);
// -> [2, 3, 4, 5]

remove(arr, [0, 1]);
// -> [3, 4, 5]

remove(arr, [0, 4]);
// -> [2, 3, 4]

remove(arr, [-1]);
// -> [1, 2, 3, 4]

remove(arr, [-1, -4])
// -> [1, 3, 4]

remove(arr, [0.2, 1.8]);
// -> [3, 4, 5]

remove(arr, []);
// -> [1, 2, 3, 4, 5]

remove(arr, [arr.length]);
// -> [1, 2, 3, 4, 5]
```
