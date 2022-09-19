<a name="isNumber"></a>

## isNumber(value) ⇒ <code>Boolean</code>
Checks if a value is a number.

**Returns**: <code>Boolean</code> - True if value is a number, else false.  
**Note:**: `NaN` is considered to be a number, as so will return true.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isNumber(10);
// => true

isNumber('10');
// => false

isNumber(new Date());
// => false

isNumber(new Date().getTime());
// => true

isNumber(true);;
// => false

isNumber(null);;
// => false

isNumber(undefined);;
// => false

isNumber('');
// => false

isNumber(NaN);
// => true
```
