<a name="degreesToRadians"></a>

## degreesToRadians(degrees) ⇒ <code>number</code>
Converts an angle from degrees to radians.

**Kind**: global function  
**Returns**: <code>number</code> - The equivalent angle in radians.  
**Throws**:

- <code>TypeError</code> If the argument is not a number.


| Param | Type | Description |
| --- | --- | --- |
| degrees | <code>number</code> | The angle in degrees. |

**Example**  
```js
degreesToRadians(0);
// => 0

degreesToRadians(90);
// => Math.PI / 2

degreesToRadians(180);
// => Math.PI

degreesToRadians(270);
// => (3 * Math.PI) / 2

degreesToRadians(360);
// => 2 * Math.PI
```
