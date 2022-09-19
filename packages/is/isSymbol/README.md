<a name="isSymbol"></a>

## isSymbol(value) ⇒ <code>Boolean</code>
Checks if a value is classified as a Symbol primitive.

**Returns**: <code>Boolean</code> - True if value is classified as a Symbol primitive, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isSymbol(Symbol());
// => true

isSymbol(Symbol('foo'));
// => true

isSymbol(Symbol.for('foo'));
// => true

isSymbol(Symbol.iterator);
// => true

isSymbol('foo');
// => false
```
