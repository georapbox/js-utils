<a name="isDate"></a>

## isDate(value) ⇒ <code>Boolean</code>
Checks if 'value' is a date.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if 'value' is a date, else returns false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isDate(new Date());
// -> true

isDate(new Date().getTime());
// -> false
```
