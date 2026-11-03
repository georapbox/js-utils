<a name="lerp"></a>

## lerp(t, start, end) ⇒ <code>number</code>
Performs linear interpolation between two numbers.

The interpolation factor determines the position between `start` and `end`:
`0` returns `start`, `1` returns `end`, and `0.5` returns the midpoint.
Values outside the range [0, 1] are allowed for extrapolation.

**Kind**: global function  
**Returns**: <code>number</code> - The interpolated value.  
**Throws**:

- <code>TypeError</code> If any argument is not a number.


| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The interpolation factor. |
| start | <code>number</code> | The starting value. |
| end | <code>number</code> | The ending value. |

**Example**  
```js
lerp(0.75, 0, 365);
// => 273.75

lerp(0.33, 100, 500);
// => 232

lerp(0, 100, 500);
// => 100

lerp(1, 100, 500);
// => 500

lerp(-0.5, 0, 500);
// => -250

lerp(1.5, 0, 100);
// => 150

lerp(0.25, 100, 0);
// => 75
```
