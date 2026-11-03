<a name="randomDist"></a>

## randomDist(min, max, iterations) ⇒ <code>number</code>
Returns a random number that tends toward the center of a range.
The result is the average of uniformly distributed random samples.
Higher iteration counts make values closer to the center more likely.

**Kind**: global function  
**Returns**: <code>number</code> - Returns a random number within the specified range.  
**Throws**:

- <code>TypeError</code> If any argument is not a number.
- <code>RangeError</code> If `min` or `max` is not finite, or `iterations` is not a positive finite number after rounding down or exceeds the maximum allowed iterations.


| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | The minimum value of the range. |
| max | <code>number</code> | The maximum value of the range. |
| iterations | <code>number</code> | The number of random samples. Fractional values are rounded down using `Math.floor()`. |

**Example**  
```js
// Uniformly distributed random number.
randomDist(0, 100, 1);
// => A random number between 0 and 100

// Random number more likely to be close to the center.
randomDist(0, 100, 200);
// => A random number typically close to 50
```
