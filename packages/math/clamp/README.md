<a name="clamp"></a>

## clamp(value, min, max) ⇒ <code>Number</code>
Clamps number within the inclusive `min` and `max` bounds, making sure it does not go beyond them on either side.
If `min` is greater than `max` the parameters are swapped to support inverted ranges.

**Returns**: <code>Number</code> - The clamped number.  
**Throws**:

- <code>TypeError</code> If one or more of the arguments passed is not a number.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | The number to clamp. |
| min | <code>Number</code> | The lower bound. |
| max | <code>Number</code> | The upper bound. |

**Example**  
```js
clamp(10, -5, 5);
// => 5

clamp(-10, -5, 5);
// => -5

clamp(-15, 0, 100);
// => 0

clamp(120, 0, 100);
// => 100

clamp(-5, NaN, 5); // If any of lower or upper bound are `NaN`, they will be converted to `0`.
// => 0

clamp(120, 100, 0); // The order of lower and upper bounds is reversed (100 > 0)
// => 100
```
