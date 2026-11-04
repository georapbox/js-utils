<a name="lerp"></a>

## lerp(norm, min, max) ⇒ <code>Number</code>
Takes a normalized value within a range of values and converts
it to a numerical value that the normalized value points to.

**Returns**: <code>Number</code> - The value that the normalized value points to.  
**Throws**:

- <code>TypeError</code> If any of the arguments passed is not a number.


| Param | Type | Description |
| --- | --- | --- |
| norm | <code>Number</code> | The normalized value to convert. |
| min | <code>Number</code> | The minimum value of the range of values. |
| max | <code>Number</code> | The maximum value of the range of values. |

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
```
