<a name="inRange"></a>

## inRange(value, min, max) ⇒ <code>Boolean</code>
Checks if a number is between `min` and 'max' values including.
If `min` is greater than `max` the parameters are swapped to support inverted ranges.

**Returns**: <code>Boolean</code> - True if number is in the range; otherwise false.  
**Throws**:

- <code>TypeError</code> If one or more of the arguments passed is not a number.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | The number to check. |
| min | <code>Number</code> | The minimum value of the range. |
| max | <code>Number</code> | The maximum value of the range. |

**Example**  
```js
inRange(3, 2, 4);
// => true

inRange(3, 4, 2);
// => true (`min` and `max` parameters are swapped)

inRange(-3, -2, -6);
// => true

inRange(4, 8, 2);
// => true

inRange(4.5, 8.2, 2.1);
// => true
```
