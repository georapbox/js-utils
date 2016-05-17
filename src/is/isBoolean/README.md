<a name="isBoolean"></a>

## isBoolean(value) ⇒ <code>Boolean</code>
Checks if 'value' is a boolean value.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if the 'value' is a boolean value, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isBoolean(true);
// -> true

isBoolean(false);
// -> true

isBoolean({a: 'a'});
// -> false

isBoolean(null);
// -> false
```
