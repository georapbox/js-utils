<a name="isNaN"></a>

## isNaN(value) ⇒ <code>Boolean</code>
Determines whether a value is NaN or not.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if NaN, else false.  
**Category**: Is  
**Note:**: `NaN` is number and it is also the only primitive value which does not equal to itself.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check if NaN. |

**Example**  
```js
isNaN(5);
// -> false

isNaN('hello world');
// -> false

isNaN(undefined);
// -> false

isNaN(null);
// -> false

isNaN({});
// -> false

isNaN(NaN);
// -> true

var a, b = a + 5;
isNaN(b);
// -> true (undefined + 5 = NaN)

var a = null, b = a + 5;
isNaN(b);
```
