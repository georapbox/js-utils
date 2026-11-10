<a name="chunk"></a>

## chunk(array, size) ⇒ <code>Array</code>
Splits an array into chunks of the specified size.
If the array cannot be split evenly, the final chunk contains the remaining elements.

**Kind**: global function  
**Returns**: <code>Array</code> - Returns a new array containing the chunks.  
**Throws**:

- <code>TypeError</code> If `array` is not an array or `size` is not a number.
- <code>RangeError</code> If `size` is not a positive finite number after rounding down.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to process. |
| size | <code>number</code> | The size of each chunk. Fractional values are rounded down using `Math.floor()`. |

**Example**  
```js
chunk([1, 2, 3, 4], 2);
// => [[1, 2], [3, 4]]

chunk([1, 2, 3, 4, 5], 2);
// => [[1, 2], [3, 4], [5]]

chunk([1, 2, 3, 4], 3);
// => [[1, 2, 3], [4]]

chunk([1, 2, 3, 4], 2.7);
// => [[1, 2], [3, 4]]
```
