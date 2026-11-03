<a name="roundToPlaces"></a>

## roundToPlaces(value, places) ⇒ <code>number</code>
Rounds a number to the specified number of decimal places.

Positive places round to decimal digits, while negative places
round to powers of 10. The number of places must be an integer.

Rounding follows JavaScript's `Math.round()` behavior and is
subject to floating-point precision limitations.

**Kind**: global function  
**Returns**: <code>number</code> - The rounded number.  
**Throws**:

- <code>TypeError</code> If `value` is not a number or `places` is not an integer.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number to round. |
| places | <code>number</code> | The number of decimal places. |

**Example**  
```js
roundToPlaces(Math.PI, 0);
// => 3

roundToPlaces(Math.PI, 2);
// => 3.14

roundToPlaces(Math.PI, 4);
// => 3.1416

roundToPlaces(123456789, -1);
// => 123456790

roundToPlaces(123456789, -2);
// => 123456800

roundToPlaces(123456789, -3);
// => 123457000

roundToPlaces(-1.25, 1);
// => -1.2
```
