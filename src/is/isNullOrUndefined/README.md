<a name="isNullOrUndefined"></a>

## isNullOrUndefined(value) ⇒ <code>Boolean</code>
Checks if `value` is `null` or `undefined`.

**Kind**: global function  
**Returns**: <code>Boolean</code> - `true` if the `value` is `null` or `undefined`; otherwise `false`.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
var foo;

isNullOrUndefined(foo);
// -> true

isNullOrUndefined(null);
// -> true

isNullOrUndefined({foo: 'bar'});
// -> false

isNullOrUndefined();
// -> true
```
