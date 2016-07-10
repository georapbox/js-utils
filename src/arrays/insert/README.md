<a name="insert"></a>

## insert(array, [start]) ⇒ <code>Array</code>
Inserts elements to array at specific index.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array including the new elements.  
**Category**: Array  
**Throws**:

- <code>TypeError</code> If `array` is not array.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to insert elements to. |
| [start] | <code>Number</code> | <code>0</code> | The index to insert elements.        If greater than the length of the array, actual starting index will be set to the length of the array.        If negative, will begin that many elements from the end. |
| [element1 [, element2 [, ...]]] | <code>\*</code> |  | The elements to add to the array. |

**Example**  
```js
var arr = [1, 2, 3, ['x', 'y']];

insert(arr, 0, 'a');
// -> ['a', 1, 2, 3, ['x', 'y']]

insert(arr, 2, 'b');
// -> [1, 2, 'b', 3, ['x', 'y']]

insert(arr, -1, 'c');
// -> [1, 2, 3, 'c', ['x', 'y']]

insert(arr, 10, 'd');
// -> [1, 2, 3, ['x', 'y'], 'd']

insert(arr, 2);
// -> [1, 2, 3, ['x', 'y']]

insert(arr, 2, undefined);
// -> [1, 2, undefined, 3, ['x', 'y']]

insert(arr);
// -> [1, 2, 3, ['x', 'y']]
```
