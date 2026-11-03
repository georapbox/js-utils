<a name="radiansToDegrees"></a>

## radiansToDegrees(radians) ⇒ <code>number</code>
Converts an angle from radians to degrees.

**Kind**: global function  
**Returns**: <code>number</code> - The equivalent angle in degrees.  
**Throws**:

- <code>TypeError</code> If the argument is not a number.


| Param | Type | Description |
| --- | --- | --- |
| radians | <code>number</code> | The angle in radians. |

**Example**  
```js
radiansToDegrees(0);
// => 0

radiansToDegrees(Math.PI / 2);
// => 90

radiansToDegrees(Math.PI);
// => 180

radiansToDegrees((3 * Math.PI) / 2);
// => 270

radiansToDegrees(2 * Math.PI);
// => 360
```
