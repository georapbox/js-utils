<a name="isFalsy"></a>

## isFalsy(value) ⇒ <code>Boolean</code>
Checks if a value is a falsy one.

**Returns**: <code>Boolean</code> - Returns `true` if the value is falsy, otherwise `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isFalsy(true);
// => false

isFalsy(' ');
// => false

isFalsy(1);
// => false

isFalsy(false);
// => true

isFalsy('');
// => true

isFalsy();
// => true

isFalsy(0);
// => true

isFalsy(NaN);
// => true
```
