<a name="isBoolean"></a>

## isBoolean(value) ⇒ <code>Boolean</code>
Checks if a value is boolean.

**Returns**: <code>Boolean</code> - True if the 'value' is a boolean value, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isBoolean(true);
// => true

isBoolean(false);
// => true

isBoolean({a: 'a'});
// => false

isBoolean(null);
// => false
```
