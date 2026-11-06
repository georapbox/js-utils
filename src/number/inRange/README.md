<a name="inRange"></a>

## inRange(value, min, max) ⇒ <code>boolean</code>
Checks whether a number is within an inclusive range.

If `min` is greater than `max`, the bounds are treated in reverse order.
Returns `false` if any argument is `NaN`. Infinite bounds are supported.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the number is within the range; otherwise `false`.  
**Throws**:

- <code>TypeError</code> If any argument is not a number.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number to check. |
| min | <code>number</code> | The lower bound of the range. |
| max | <code>number</code> | The upper bound of the range. |

**Example**  
```js
inRange(3, 2, 4);
// => true

inRange(3, 4, 2);
// => true

inRange(2, 2, 4);
// => true

inRange(5, 2, 4);
// => false

inRange(-3, -2, -6);
// => true

inRange(4.5, 8.2, 2.1);
// => true

inRange(NaN, 0, 10);
// => false
```
