<a name="clamp"></a>

## clamp(value, min, max) ⇒ <code>Number</code>
Clamps number within the inclusive `min` and `max` bounds, making sure it does not go beyond them on either side.

The mplementation is based on proposal for `Nmuber.prototype.clamp` (originally `Math.clamp`):  
https://tc39.es/proposal-math-clamp

**Returns**: <code>Number</code> - The clamped number.  
**Throws**:

- <code>TypeError</code> If any of the arguments is not a number.
- <code>RangeError</code> If `min` is greater than `max`.


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

clamp(NaN, 0, 100);
// => NaN
```
