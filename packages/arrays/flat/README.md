<a name="flat"></a>

## flat(array, [depth]) ⇒ <code>Array</code>
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Returns**: <code>Array</code> - Returns a new array with the sub-array elements concatenated into it.  
**Throws**:

- <code>TypeError</code> Throws if `array` is not array.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The initial array to be flattened. |
| [depth] | <code>Number</code> | <code>1</code> | The depth level specifying how deep a nested array structure should be flattened. Defaults to 1. If unsure of how nested the array is, use `Infinity` to deeply flatten the array. If a number less thatn 1 is provided, it will return a shallow copy of the original array. |

**Example**
```js
var arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];

flat(arr);
// -> [1, 2, 3, 4, [5, 6, [7, 8]]]

flat(arr, 2);
// -> [1, 2, 3, 4, 5, 6, [7, 8]]

flat(arr, 3);
// -> [1, 2, 3, 4, 5, 6, 7, 8]

flat(arr, Infinity);
// -> [1, 2, 3, 4, 5, 6, 7, 8]

flat(arr, 0);
// -> [1, 2, [3, 4, [5, 6, [7, 8]]]]
```