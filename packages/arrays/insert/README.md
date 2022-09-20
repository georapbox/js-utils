<a name="insert"></a>

## insert(array, start) ⇒ <code>Array</code>
Inserts one or more elements to array at a specific index.

**Returns**: <code>Array</code> - A new array including the new elements.  
**Throws**:

- <code>TypeError</code> If `array` is not array.
- <code>TypeError</code> If `start` is not number.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to insert elements to. |
| start | <code>Number</code> | The index to insert elements. If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end. If a float number is passed, it is implicitly converted to integers using `Math.floor()`. |
| ...elements | <code>\*</code> | The elements to insert to the array. |

**Example**
```js
const arr = [1, 2, 3];

insert(arr, 0, 'a');
// => ['a', 1, 2, 3]

insert(arr, 2, 'a');
// => [1, 2, 'a', 3]

insert(arr, -1, 'a');
// => [1, 2, 'a', 3]

insert(arr, 0.9, 'a');
// => ['a', 1, 2, 3];

insert(arr, arr.length + 1, 'a');
// => [1, 2, 3, 'a']

insert(arr, 1, 'a', 'b', 'c');
// => [1, 'a', 'b', 'c', 2, 3]

insert(arr, 2, undefined);
// => [1, 2, undefined, 3]

insert(arr, 2);
// => [1, 2, 3]
```
