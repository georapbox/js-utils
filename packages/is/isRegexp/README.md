<a name="isRegexp"></a>

## isRegexp(value) ⇒ <code>Boolean</code>
Checks if a value is a regular expression.

**Returns**: <code>Boolean</code> - True if the value is a regular expression, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isRegexp(/^[0-9a-fA-F]+$/);
// => true

isRegexp('/^[0-9a-fA-F]+$/');
// => false
```
