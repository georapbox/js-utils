<a name="normalize"></a>

## normalize(value, start, end) ⇒ <code>number</code>
Normalizes a number relative to a range, returning its position
as an interpolation factor.

`0` represents `start`, `1` represents `end`, and `0.5` represents
the midpoint. Values outside the range are allowed and may produce
results outside [0, 1]. Reversed ranges are supported.

**Kind**: global function  
**Returns**: <code>number</code> - The normalized value.  
**Throws**:

- <code>TypeError</code> If any argument is not a number.
- <code>RangeError</code> If `start` and `end` are equal.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number to normalize. |
| start | <code>number</code> | The starting value of the range. |
| end | <code>number</code> | The ending value of the range. |

**Example**  
```js
normalize(25, 0, 100);
// => 0.25

normalize(50, 0, 100);
// => 0.5

normalize(100, 0, 100);
// => 1

normalize(150, 0, 100);
// => 1.5

normalize(-50, 0, 100);
// => -0.5

normalize(75, 100, 0);
// => 0.25
```
