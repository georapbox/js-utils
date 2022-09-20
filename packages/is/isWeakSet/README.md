<a name="isWeakSet"></a>

## isWeakSet(value) ⇒ <code>Boolean</code>
Checks if a value is classified as a WeakSet object.

**Returns**: <code>Boolean</code> - True if value is classified as a WeakSet object, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isWeakSet(new WeakSet());
// => true

isWeakSet(new Set());
// => false
```
