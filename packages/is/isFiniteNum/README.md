<a name="isFiniteNum"></a>

## isFiniteNum(value) ⇒ <code>Boolean</code>
Checks if 'value' is a finite number.

**Returns**: <code>Boolean</code> - True if value is a finite number, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isFiniteNum(Infinity);
// => false

isFiniteNum(NaN);
// => false

isFiniteNum(-Infinity);
// => false

isFiniteNum(0);
// => true

isFiniteNum(2e64);
// => true

isFiniteNum(null);
// => false

isFiniteNum(undefined);
// => false

isFiniteNum('0');
// => false
```
