<a name="isNull"></a>

## isNull(value) ⇒ <code>Boolean</code>
Checks if a value is `null`.

**Returns**: <code>Boolean</code> - True if the value is null, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isNull(null);
// => true

isNull(true);
// => false

isNull({a: 'a'});
// => false

isNull();
// => false
```
