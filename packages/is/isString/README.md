<a name="isString"></a>

## isString(value) ⇒ <code>Boolean</code>
Checks if a value is string.

**Returns**: <code>Boolean</code> - True if value is string, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isString(['a', 'b', 'c', 'd']);
// => false

isString(100);
// => false

isString('Lorem ipsum dolor sit amet');
// => true

isString({ a: 'a', b: 'b' });
// => false
```
