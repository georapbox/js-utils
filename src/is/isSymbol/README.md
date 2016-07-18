<a name="isSymbol"></a>

## isSymbol(value) ⇒ <code>Boolean</code>
Checks if value is classified as a Symbol primitive.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if `value` is classified as a Symbol primitive, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isSymbol(Symbol());
// -> true

isSymbol(Symbol('abc'));
// -> true

isSymbol(Symbol.for('abc'));
// -> true

isSymbol(Symbol.iterator);
// -> true

isSymbol('abc');
// -> false
```
