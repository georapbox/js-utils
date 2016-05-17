<a name="isExisty"></a>

## isExisty(value) ⇒ <code>Boolean</code>
Checks if 'value' is existy (Not null or undefined).

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if the 'value' is existy, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isExisty('Foo');
// -> true

isExisty(null);
// -> false

isExisty();
// -> false
```
