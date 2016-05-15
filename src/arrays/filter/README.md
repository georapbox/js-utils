<a name="filter"></a>

## filter(array, callback, [thisArg]) ⇒ <code>Array</code>
Creates a new array with all elements that pass the test implemented by the provided callback function.

**Kind**: global function  
**Returns**: <code>Array</code> - Returns the result array.  
**Category**: Array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to iterate over. |
| callback | <code>function</code> | Function to test each element of the array. |
| [thisArg] | <code>Object</code> | Optional. Value to use as `this` when executing callback. |

**Example**  
```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];

filter(arr, function (item, index, obj) {
  return typeof item === 'string';
});
// -> ['a', 'b', 'c']

filter(arr, function (item, index, obj) {
  return item.a === 'b' || item === 2;
});
// -> [{a: 'b'}, 2]
```
