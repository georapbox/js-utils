<a name="zip"></a>

## zip(...arrays) ⇒ <code>Array</code>
Creates a new array of grouped elements by combining values at the same
index from each input array.

The result contains as many groups as the longest input array.
Missing elements, including sparse array holes, are treated as `undefined`.
The original arrays are not modified.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array containing the grouped elements.  
**Throws**:

- <code>TypeError</code> If any argument is not an array.


| Param | Type | Description |
| --- | --- | --- |
| ...arrays | <code>Array</code> | The arrays to process. |

**Example**  
```js
zip([1, 2, 3], [11, 22, 33], [111, 222, 333]);
// => [[1, 11, 111], [2, 22, 222], [3, 33, 333]]

zip([1, 2, 3], [11, 22], [111]);
// => [[1, 11, 111], [2, 22, undefined], [3, undefined, undefined]]

zip([], [1, 2]);
// => [[undefined, 1], [undefined, 2]]

zip();
// => []
```
