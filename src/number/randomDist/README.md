<a name="randomDist"></a>

## randomDist(min, max, iterations) ⇒ <code>Number</code>
Returns a weighted random number (that tends to the center) of a range of numbers based on the number of the iterations set.
The higher the iterations, the higher is the possibility the returned value to be closer to the center of the range.

**Returns**: <code>Number</code> - The weighted random number.  
**Throws**:

- <code>TypeError</code> If one or more of the arguments passed is not a number.
- <code>RangeError</code> If `iterations` is not a positive number. or zero, or `NaN`, or greater than `Number.MAX_SAFE_INTEGER`.


| Param | Type | Description |
| --- | --- | --- |
| min | <code>Number</code> | The minimum value of the range. |
| max | <code>Number</code> | The maximum value of the range. |
| iterations | <code>Number</code> | The number of the iterations. The value passed is converted to integer internally using `Math.floor()`. |

**Example**  
```js
randomDist(0, 100, 200);
// => 49.27716133759931
```
