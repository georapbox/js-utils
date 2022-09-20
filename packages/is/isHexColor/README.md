<a name="isHexColor"></a>

## isHexColor(value) ⇒ <code>Boolean</code>
Checks if a value matches a hexadecimal color regular expression.

**Returns**: <code>Boolean</code> - True if value is a hexadecimal color regexp, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isHexColor('#f5f5f5');
// => true

isHexColor('#9c0');
// => true

isHexColor('333');
// => true

isHexColor(333);
// => true

isHexColor(6.6);
// => false

isHexColor('foo');
// => false

isHexColor(null);
// => false

isHexColor();
// => false
```
