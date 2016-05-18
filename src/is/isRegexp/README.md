<a name="isRegexp"></a>

## isRegexp(value) ⇒ <code>Boolean</code>
Checks if 'value' is a regular expression.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if the 'value' is a regular expression, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isRegexp(/^[0-9a-fA-F]+$/);
// -> true

isRegexp('/^[0-9a-fA-F]+$/');
// -> false
```
