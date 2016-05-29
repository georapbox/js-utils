<a name="forEach"></a>

## forEach(array, callback, [thisArg])
Executes a provided callback function once per array element.
To break from the iteration at any time, have the callback return `false`.

**Kind**: global function  
**Category**: Array  
**Throws**:

- <code>TypeError</code> If `array` is not array.
- <code>TypeError</code> If `callback` is not function.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to iterate over. |
| callback | <code>function</code> | Function to execute for each element. |
| [thisArg] | <code>\*</code> | Value to use as `this` when executing callback. |

**Example**  
```js
var arr = ['a', 'b', 'c', 'd', 'e'];

forEach(arr, function (item, index, obj) {
  console.log(item);
});
// -> a, b, c, d, e

forEach(arr, function (item, index, obj) {
  console.log(index);
});
// -> 0, 1, 2, 3, 4

forEach(arr, function (item, index, obj) {
  if (item === 'c') {
    return false;
  }
});
// -> a, b, c

forEach(arr, function (item, index, obj) {
  console.log(this);
  return false;
}, arr);
// =>  ['a', 'b', 'c', 'd', 'e']
```
