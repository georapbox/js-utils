<a name="take"></a>

## take(array, [n]) ⇒ <code>Array</code>
Creates a slice of `array` with `n` items taken from the beginning.

**Kind**: global function  
**Returns**: <code>Array</code> - Returns a new array containing the selected items.  
**Throws**:

- <code>TypeError</code> If `array` is not an array or `n` is not a number.
- <code>RangeError</code> If `n` is `NaN`.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to process. |
| [n] | <code>number</code> | <code>1</code> | The number of items to take. Fractional values are rounded down using `Math.floor()`. |

**Example**  
```js
take([1, 2, 3, 4, 5]);
// => [1]

take([1, 2, 3, 4, 5], 3);
// => [1, 2, 3]

take([1, 2, 3, 4, 5], 2.7);
// => [1, 2]

take([1, 2, 3, 4, 5], 0);
// => []

take([1, 2, 3, 4, 5], -2);
// => []

take([1, 2, 3, 4, 5], 10);
// => [1, 2, 3, 4, 5]

take([1, 2, 3, 4, 5], Infinity);
// => [1, 2, 3, 4, 5]
```
