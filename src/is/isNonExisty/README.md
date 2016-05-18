<a name="isNonExisty"></a>

## isNonExisty(value) ⇒ <code>Boolean</code>
Checks if 'value' is non existy (null or undefined).

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if the 'value' is non existy, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
var foo;

isNonExisty(foo);
// -> true

isNonExisty(null);
// -> true

isNonExisty({foo: 'bar'});
// -> false

isNonExisty();
// -> true
```
