<a name="isString"></a>

## isString(value) ⇒ <code>Boolean</code>
Checks if `value` is string.

**Returns**: <code>Boolean</code> - True if string, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check if is string. |

**Example**  
```js
isString(['a', 'b', 'c', 'd']);
// -> false

isString(100);
// -> false

isString('Lorem ipsum dolor sit amet');
// -> true

isString({ a: 'a', b: 'b' });
// -> false
```
