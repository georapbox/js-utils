<a name="subStrBefore"></a>

## subStrBefore(subjectString, characters, [last]) ⇒ <code>string</code>
Returns a substring before a specific sequence of character(s).
By default looks for the first occurrence of this sequence.
If the character or sequence of characters not found, returns the initial string.

**Kind**: global function  
**Returns**: <code>string</code> - The result string.  
**Category**: String  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.
- <code>TypeError</code> If `characters` is not string.

**Note**: For legacy browsers' support use `String.prototype.lastIndexOf`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | The string to process. |
| characters | <code>String</code> |  | The seqquence of characters to use as delimiter. |
| [last] | <code>Boolean</code> | <code>false</code> | If true or any truthy value, will look for the last occurence of the characters specified. |

**Example**  
```js
subStrBefore('LOREM_IPSUM DOLOR_SIT AMET', '_');
// -> 'LOREM'

subStrBefore('LOREM_IPSUM DOLOR_SIT AMET', '_', true);
// -> 'LOREM_IPSUM DOLOR'

subStrBefore('LOREM_IPSUM DOLOR_SIT AMET', 'SIT');
// -> 'LOREM_IPSUM DOLOR_'

subStrBefore('LOREM_IPSUM DOLOR_SIT AMET', '?', true);
// -> 'LOREM_IPSUM DOLOR_SIT AMET'

subStrBefore('LOREM_IPSUM DOLOR_SIT AMET');
// -> Throws TypeError
```
