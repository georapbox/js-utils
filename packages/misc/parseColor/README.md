<a name="parseColor"></a>

## parseColor(color, [toNumber]) ⇒ <code>Number</code> &#124; <code>String</code>
Converts a color number value to a hexadecimal formatted string,
or a hexadecimal formatted string to a number.

**Returns**: <code>Number</code> &#124; <code>String</code> - The converted color value.  
**Category**: Misc  
**Throws**:

- <code>TypeError</code> If `color` is not number or string.


| Param | Type | Description |
| --- | --- | --- |
| color | <code>Number</code> &#124; <code>String</code> | The color value to convert. |
| [toNumber] | <code>Boolean</code> | If set to true, a numeric color value is returned. |

**Example**  
```js
parseColor('#ff0000', true);
// -> 16711680

parseColor('ff0000', true);
// -> 16711680

parseColor('#ff0000');
// -> '#ff0000'

parseColor('ff0000');
// -> 'ff0000'

parseColor(16711680);
// -> '#ff0000'

parseColor(16711680, true);
// -> 16711680

parseColor(0xff0000);
// -> '#ff0000'

parseColor(0xff0000, true);
// -> 16711680
```
