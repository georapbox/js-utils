<a name="randomInt"></a>

## randomInt(min, max) ⇒ <code>Number</code>
Returns a pseudo-random integer number between a min (inclusive) and a max (inclusive) value.
If `min` is greater than `max` the parameters are swapped to support inverted ranges.

**Returns**: <code>Number</code> - The pseudo-random integer number.  
**Throws**:

- <code>TypeError</code> If one or more of the arguments passed is not a number.


| Param | Type | Description |
| --- | --- | --- |
| min | <code>Number</code> | The minimum value of the range. |
| max | <code>Number</code> | The maximum value of the range. |

**Example**  
```js
randomInt(3, 8);
// => Any integer number between 3 (inclusive) and 8 (inclusive). eg 6
```
