<a name="hexToRGB"></a>

## hexToRGB(color, [alpha]) ⇒ <code>String</code>
Converts a color value (number or hexadecimal string) to RGB(A) format.

**Kind**: global function  
**Returns**: <code>String</code> - The converted value in RGB(A) format.  
**Category**: Misc  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>Number</code> &#124; <code>String</code> |  | The color value to convert. |
| [alpha] | <code>Number</code> | <code>1</code> | Indicates an alpha value, which is a decimal number between 0 and 1. |

**Example**  
```js
hexToRGB(0xFF0000);
// -> 'rgb(255, 0, 0)'

hexToRGB('0xFF0000');
// -> 'rgb(255, 0, 0)'

hexToRGB('#ff0000');
// -> 'rgb(255, 0, 0)'

hexToRGB(16711680);
// -> 'rgb(255, 0, 0)'

hexToRGB('16711680');
// -> 'rgb(255, 0, 0)'

hexToRGB('#ff0000', 0.5);
// -> 'rgba(255, 0, 0, 0.5)'

hexToRGB('#ff0000', '0.5');
// -> 'rgb(255, 0, 0)'

hexToRGB('#ff0000', null);
// -> 'rgb(255, 0, 0)'

hexToRGB();
// -> 'rgb(0, 0, 0)'

hexToRGB(null);
// -> 'rgb(0, 0, 0)'

hexToRGB('Hello world');
// -> 'rgb(0, 0, 0)'
```
