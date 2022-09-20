<a name="isPrimitive"></a>

## isPrimitive(value) ⇒ <code>Boolean</code>
Checks if value is a primitive data type.

**Returns**: <code>Boolean</code> - Returns `true` if value is primitive, otherwise `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isPrimitive(null); // => true

isPrimitive(undefined); // => true

isPrimitive(123); // => true

isPrimitive(Infinity); // => true

isPrimitive(NaN); // => true

isPrimitive('foo'); // => true

isPrimitive(true); // => true

isPrimitive(false); // => true

isPrimitive(Symbol('foo')); // => true

isPrimitive({}); // => false

isPrimitive([]); // => false

isPrimitive(function () {}); // => false

isPrimitive(new Map()); // => false

isPrimitive(new WeakMap()); // => false

isPrimitive(new Set()); // => false

isPrimitive(new WeakSet()); // => false

isPrimitive(new Date()); // => false

isPrimitive(/s+/g); // => false
```
