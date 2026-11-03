<a name="takeRight"></a>

## takeRight(array, [n]) ⇒ <code>Array</code> \| <code>Array</code>
Creates a new array containing up to `n` elements from the end
of the input array.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array containing the selected elements.<code>Array</code> - Returns a new array containing the selected items.  
**Throws**:

- <code>TypeError</code> If `array` is not an array or `n` is not a number.
- <code>RangeError</code> If `n` is `NaN`.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to process. |
| [n] | <code>number</code> | <code>1</code> | The number of elements to take. Fractional values are rounded down using `Math.floor()`. |

**Example**  
```js
takeRight([1, 2, 3, 4, 5]);
// => [5]

takeRight([1, 2, 3, 4, 5], 3);
// => [3, 4, 5]

takeRight([1, 2, 3, 4, 5], 2.7);
// => [4, 5]

takeRight([1, 2, 3, 4, 5], 0);
// => []

takeRight([1, 2, 3, 4, 5], -2);
// => []

takeRight([1, 2, 3, 4, 5], 10);
// => [1, 2, 3, 4, 5]

takeRight([1, 2, 3, 4, 5], Infinity);
// => [1, 2, 3, 4, 5]
```
