<a name="isUndefined"></a>

## isUndefined(value) ⇒ <code>Boolean</code>
Checks if 'value' is undefined.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if the 'value' is undefined, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
var foo;

isUndefined(foo);
// -> true

isUndefined(null);
// -> false

isUndefined({foo: 'bar'});
// -> false

isUndefined();
// -> true
```
