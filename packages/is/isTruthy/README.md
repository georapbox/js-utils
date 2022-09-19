<a name="isTruthy"></a>

## isTruthy(value) ⇒ <code>Boolean</code>
Checks if a value is a truthy one.

**Returns**: <code>Boolean</code> - Returns `true` if the value is truthy, otherwise `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isTruthy(true);
// => true

isTruthy(' ');
// => true

isTruthy(1);
// => true

isTruthy(false);
// => false

isTruthy('');
// => false

isTruthy();
// => false

isTruthy(0);
// => false

isTruthy(NaN);
// => false
```
