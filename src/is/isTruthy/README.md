<a name="isTruthy"></a>

## isTruthy(value) ⇒ <code>Boolean</code>
Checks if 'value' is a truthy one.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if the 'value' is truthy, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isTruthy(true);
// -> true

isTruthy(' ');
// -> true

isTruthy(1);
// -> true

isTruthy(false);
// -> false

isTruthy('');
// -> false

isTruthy();
// -> false

isTruthy(0);
// -> false

isTruthy(NaN);
// -> false
```
