<a name="degreesToRadians"></a>

## degreesToRadians(degrees) ⇒ <code>Number</code>
Converts degrees to radians.

**Returns**: <code>Number</code> - The result in radiands, after conversion.  
**Throws**:

- <code>TypeError</code> If `degrees` is not a number.


| Param | Type | Description |
| --- | --- | --- |
| degrees | <code>Number</code> | A number representing the degrees to convert. |

**Example**  
```js
degreesToRadians(0);
// => 0

degreesToRadians(90);
// => 1.5707963267948966 (π / 2)

degreesToRadians(180);
// => 3.141592653589793 (π)

degreesToRadians(270);
// => 4.71238898038469 (3π / 2)

degreesToRadians(360);
// => 6.283185307179586 (2π)
```
