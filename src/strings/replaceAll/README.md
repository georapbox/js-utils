<a name="replaceAll"></a>

## replaceAll(subjectString, subString, replaceString, [caseInsensitive]) ⇒ <code>String</code>
Creates a new string with all occurrences of `subString` replaced with `replaceString`.

**Kind**: global function  
**Returns**: <code>String</code> - The result string.  
**Category**: String  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | The initial string. |
| subString | <code>String</code> |  | The substring to replace. |
| replaceString | <code>String</code> |  | The substring to replace with. |
| [caseInsensitive] | <code>Boolean</code> | <code>false</code> | If true, the lookup is case insensitive. |

**Example**  
```js
var str = 'Lorem ispum 5 dolor sit amet.';

replaceAll(str, ' ', '_'));
// -> 'Lorem_ispum_5_dolor_sit_amet.'

replaceAll(str, '', '-'));
// -> 'L-o-r-e-m- -i-s-p-u-m- -5- -d-o-l-o-r- -s-i-t- -a-m-e-t-.'

replaceAll(str, '5', '15'));
// -> 'Lorem ispum 15 dolor sit amet.'

replaceAll(str, 'Lorem', '***'));
// -> '*** ispum 5 dolor sit amet.'

replaceAll(str, 'LOREM', '_lorem_', true));
// -> '_lorem_ ispum 5 dolor sit amet.'
```
