<a name="roundToNearest"></a>

## roundToNearest(value, nearest) ⇒ <code>number</code>
Rounds a number to the nearest multiple of a given value.

Negative multiples are treated as positive. Halfway values are rounded
toward positive infinity, following JavaScript's Math.round() behavior.
The multiple must be finite and nonzero.

**Kind**: global function  
**Returns**: <code>number</code> - The rounded number.  
**Throws**:

- <code>TypeError</code> If either argument is not a number.
- <code>RangeError</code> If `nearest` is zero or not finite.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number to round. |
| nearest | <code>number</code> | The multiple to round to. |

**Example**  
```js
roundToNearest(100, 40);
// => 120

roundToNearest(140, 40);
// => 160

roundToNearest(180, 40);
// => 200

roundToNearest(15, -10);
// => 20

roundToNearest(-15, 10);
// => -10

roundToNearest(12.5, 5);
// => 15

roundToNearest(NaN, 10);
// => NaN
```
