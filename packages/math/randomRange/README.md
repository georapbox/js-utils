<a name="randomRange"></a>

## randomRange(min, max) ⇒ <code>Number</code>
Returns a pseudo-random number between a min (inclusive) and a max (exclusive) value.
If `min` is greater than `max` the parameters are swapped to support inverted ranges.

**Returns**: <code>Number</code> - The pseudo-random number.  
**Throws**:

- <code>TypeError</code> If one or more of the arguments passed is not a number.


| Param | Type | Description |
| --- | --- | --- |
| min | <code>Number</code> | The minimum value of the range. |
| max | <code>Number</code> | The maximum value of the range. |

**Example**  
```js
randomRange(3, 8);
// => Any number between 3 (inclusive) and 8 (exclusive). eg 5.3304674779064953
```
