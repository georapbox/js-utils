<a name="numberFormat"></a>

## numberFormat(nNumber, [nDecimals], [sDecimalSeperator], [sThousandSeperator]) ⇒ <code>String</code>
Formats a number based on the number of decimal points,
the decimal seperator and the thousands seperator.
If a string is provided as the first argument, will try to convert it.

**Kind**: global function  
**Returns**: <code>String</code> - The formatted number as a string.  
**Category**: Number  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| nNumber | <code>Number</code> |  | The number to format. |
| [nDecimals] | <code>Number</code> | <code>0</code> | The number of decimal points the formatted number will have. |
| [sDecimalSeperator] | <code>String</code> | <code>&#x27;.&#x27;</code> | The decimal seperator character(s). |
| [sThousandSeperator] | <code>String</code> | <code>&#x27;,&#x27;</code> | The thousands seperator character(s). |

**Example**  
```js
numberFormat(123456789.12345);
// -> '123,456,789'

numberFormat(123456789.12345, 3, '.', ',');
// -> '123,456,789.123'

numberFormat(123456789.12345, 3, ',', '.');
// -> '123.456.789,123'
```
