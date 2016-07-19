<a name="isWeakSet"></a>

## isWeakSet(value) ⇒ <code>Boolean</code>
Checks if value is classified as a WeakSet object.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if `value` is classified as a WeakSet object, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isWeakSet(new WeakSet());
// -> true

isWeakSet(new Set());
// -> false
```
