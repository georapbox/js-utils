<a name="roundToNearest"></a>

## roundToNearest(value, nearest) ⇒ <code>Number</code>
Rounds a number to the nearest multiple of a value provided.

**Returns**: <code>Number</code> - The rounded number.  
**Throws**:

- <code>TypeError</code> If one or more of the arguments passed is not a number.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>Number</code> |  | The number to be rounded. |
| nearest | <code>Number</code> | <code>1</code> | The value to be used in order to find the nearest multiple of. |

**Example**  
```js
roundToNearest(100, 40);
// => 120

roundToNearest(140, 40);
// => 160

roundToNearest(180, 40);
// => 200

roundToNearest(113, 0);
// => 113 (0 is converted to 1)

roundToNearest(113, NaN);
// => 113 (NaN is converted to 1)
```
