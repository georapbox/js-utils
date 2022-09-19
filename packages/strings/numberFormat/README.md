<a name="numberFormat"></a>

## numberFormat(nNumber, [nDecimals], [sDecimalSeparator], [sThousandSeparator]) ⇒ <code>String</code>
Formats a number based on the number of decimal points,
the decimal separator and the thousands separator.
If a string is provided as the first argument, will try to convert it.

**Returns**: <code>String</code> - The formatted number as a string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| nNumber | <code>Number</code> |  | The number to format. |
| [nDecimals] | <code>Number</code> | <code>0</code> | The number of decimal points the formatted number will have. |
| [sDecimalSeparator] | <code>String</code> | <code>&#x27;.&#x27;</code> | The decimal separator character(s). |
| [sThousandSeparator] | <code>String</code> | <code>&#x27;,&#x27;</code> | The thousands separator character(s). |

**Example**  
```js
numberFormat(123456789.12345);
// => '123,456,789'

numberFormat(123456789.12345, 3, '.', ',');
// => '123,456,789.123'

numberFormat(123456789.12345, 3, ',', '.');
// => '123.456.789,123'
```
