<a name="isDate"></a>

## isDate(value) ⇒ <code>Boolean</code>
Checks if a value is a date object.

**Returns**: <code>Boolean</code> - True if 'value' is a date, else returns false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isDate(new Date());
// => true

isDate(new Date().getTime());
// => false
```
