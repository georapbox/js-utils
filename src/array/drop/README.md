<a name="drop"></a>

## drop(array, [n]) ⇒ <code>Array</code>
Creates a slice of an array with `n` elements dropped from the beginning.

**Kind**: global function  
**Returns**: <code>Array</code> - Returns a new array containing the remaining elements.  
**Throws**:

- <code>TypeError</code> If `array` is not an array or `n` is not a number.
- <code>RangeError</code> If `n` is `NaN`.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to process. |
| [n] | <code>number</code> | <code>1</code> | The number of elements to drop. Fractional values are rounded down using `Math.floor()`. |

**Example**  
```js
drop([1, 2, 3, 4, 5]);
// => [2, 3, 4, 5]

drop([1, 2, 3, 4, 5], 3);
// => [4, 5]

drop([1, 2, 3, 4, 5], 2.7);
// => [3, 4, 5]

drop([1, 2, 3, 4, 5], 0);
// => [1, 2, 3, 4, 5]

drop([1, 2, 3, 4, 5], -2);
// => [1, 2, 3, 4, 5]

drop([1, 2, 3, 4, 5], 10);
// => []

drop([1, 2, 3, 4, 5], Infinity);
// => []
```
