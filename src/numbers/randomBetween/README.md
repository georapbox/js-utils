<a name="randomBetween"></a>

## randomBetween(min, max, [floatPoint]) ⇒ <code>Number</code>
Returns a pseudo-random number (integer or floating-point)
between a min (inclusive) and a max (exclusive) value.

**Kind**: global function  
**Returns**: <code>Number</code> - The pseudo-random number.  
**Category**: Number  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| min | <code>Number</code> |  | The minimum value of the range. |
| max | <code>Number</code> |  | The maximum value of the range. |
| [floatPoint] | <code>Boolean</code> | <code>false</code> | If true the returned number will be floating-point. |

**Example**  
```js
randomBetween(3, 8);
// -> Any integer between 3 (inclusive) and 8 (exclusive). eg 3, 4, 5, 6, 7

randomBetween(3, 8, true);
// -> Any floating-point number between 3 (inclusive) and 8 (exclusive). eg 6.362311312365572

randomBetween(3);
// -> NaN

randomBetween(3, null);
// -> NaN

randomBetween(3, Infinity);
// -> NaN
```
