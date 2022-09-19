<a name="isInteger"></a>

## isInteger(value) ⇒ <code>Boolean</code>
Checks if a value is an integer number.
If the value is NaN or infinite, return false.

**Returns**: <code>Boolean</code> - True if value is integer, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isInteger(1);
// => true

isInteger(9007199254740992);
// => true

isInteger(-9007199254740992);
// => true

isInteger(-100000);
// => true

isInteger(0);
// => true

isInteger(0.1);
// => false

isInteger(Math.PI);
// => false

isInteger(NaN);
// => false

isInteger('10');
// => false

isInteger(Number.MAX_VALUE);
// => false

isInteger(Infinity);
// => false
```
