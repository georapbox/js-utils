<a name="isSet"></a>

## isSet(value) ⇒ <code>Boolean</code>
Checks if a value is classified as a Set object.

**Returns**: <code>Boolean</code> - True if value is classified as a Set object, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isSet(new Set());
// => true

isSet(new WeakSet());
// => false
```
