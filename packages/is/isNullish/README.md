<a name="isNullish"></a>

## isNullish(value) ⇒ <code>Boolean</code>
Checks if value is `null` or `undefined`.

**Returns**: <code>Boolean</code> - `true` if the value is `null` or `undefined`; otherwise `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
let foo;

isNullish(foo);
// => true

isNullish(null);
// => true

isNullish({foo: 'bar'});
// => false

isNullish();
// => true
```
