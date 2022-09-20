<a name="isSafeInteger"></a>

## isSafeInteger(value) ⇒ <code>Boolean</code>
Checks if an integer number is in the safe range, i.e., it is correctly represented by JavaScript
(where all numbers, including integer numbers, are technically floating point number).

**Returns**: <code>Boolean</code> - True if safe integer, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isSafeInteger(3));
// => true

isSafeInteger(Math.pow(2, 53)));
// => false

isSafeInteger(-Math.pow(2, 53))).
// => false

isSafeInteger(Math.pow(2, 53) - 1));
// => true

isSafeInteger(NaN));
// => false

isSafeInteger(Infinity));
// => false

isSafeInteger('3'));
// => false

isSafeInteger(3.1));
// => false

isSafeInteger(3.0));
// => true
```
