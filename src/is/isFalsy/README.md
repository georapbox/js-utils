<a name="isFalsy"></a>

## isFalsy(value) ⇒ <code>Boolean</code>
Checks if 'value' is a falsy one.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if the 'value' is falsy, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isFalsy(true);
// -> false

isFalsy(' ');
// -> false

isFalsy(1);
// -> false

isFalsy(false);
// -> true

isFalsy('');
// -> true

isFalsy();
// -> true

isFalsy(0);
// -> true

isFalsy(NaN);
// -> true
```
