<a name="move"></a>

## move(array, fromIndex, toIndex) ⇒ <code>Array</code>
Creates a new array with an element moved from one index to another.

Negative indices are resolved relative to the original array length.
If the source index is out of range, the array is returned unchanged.
Destination indices outside the array bounds are clamped to the nearest
valid position. Sparse array holes are treated as `undefined` values.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array with the element moved.  
**Throws**:

- <code>TypeError</code> If the first argument is not an array or either index is not an integer.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |
| fromIndex | <code>number</code> | The index of the element to move. |
| toIndex | <code>number</code> | The destination index. |

**Example**  
```js
move(['A', 'B', 'C', 'D'], 0, 2);
// => ['B', 'C', 'A', 'D']

move(['A', 'B', 'C', 'D'], -1, 1);
// => ['A', 'D', 'B', 'C']

move(['A', 'B', 'C', 'D'], 0, -1);
// => ['B', 'C', 'D', 'A']

move(['A', 'B', 'C'], 0, 10);
// => ['B', 'C', 'A']

move(['A', 'B', 'C'], 10, 0);
// => ['A', 'B', 'C']
```
