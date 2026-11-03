<a name="radiansToDegrees"></a>

## radiansToDegrees(radians) ⇒ <code>Number</code>
Converts radians to degrees.

**Returns**: <code>Number</code> - The result in degrees, after conversion.  
**Throws**:

- <code>TypeError</code> If `radians` is not a number.


| Param | Type | Description |
| --- | --- | --- |
| radians | <code>Number</code> | A number representing the radians to convert. |

**Example**  
```js
radiansToDegrees(0);
// => 0

radiansToDegrees(1.5707963267948966); // π / 2
// => 90

radiansToDegrees(3.141592653589793); // π
// => 180

radiansToDegrees(4.71238898038469); // 3π / 2
// => 270

radiansToDegrees(6.283185307179586); // 2π
// => 360
```
