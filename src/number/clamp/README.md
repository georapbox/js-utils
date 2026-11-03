<a name="clamp"></a>

## clamp(value, min, max) ⇒ <code>number</code>
Clamps a number within the inclusive minimum and maximum bounds.

Based on the TC39 Math.clamp proposal:
https://tc39.es/proposal-math-clamp/

Returns `NaN` if any argument is `NaN`.
Supports infinite bounds and preserves signed-zero behavior.

**Kind**: global function  
**Returns**: <code>number</code> - The clamped number.  
**Throws**:

- <code>TypeError</code> If any argument is not a number.
- <code>RangeError</code> If `min` is greater than `max`, unless an argument is `NaN`.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number to clamp. |
| min | <code>number</code> | The lower bound. |
| max | <code>number</code> | The upper bound. |

**Example**  
```js
clamp(10, -5, 5);
// => 5

clamp(-10, -5, 5);
// => -5

clamp(50, 0, 100);
// => 50

clamp(10, -Infinity, Infinity);
// => 10

clamp(NaN, 0, 100);
// => NaN

clamp(-0, +0, 10);
// => +0
```
