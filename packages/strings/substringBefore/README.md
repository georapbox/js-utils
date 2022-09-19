<a name="substringBefore"></a>

## substringBefore(subjectString, characters, [last]) ⇒ <code>string</code>
Returns a substring before a specific sequence of character(s).
By default looks for the first occurrence of this sequence.
If the character or sequence of characters not found, returns an empty string.

**Returns**: <code>string</code> - Returns the result string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.
- <code>TypeError</code> If `characters` is not string.

**Note**: For legacy browsers' support use `String.prototype.lastIndexOf`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | The string to process. |
| characters | <code>String</code> |  | The sequence of characters to use as delimiter. Case sensitivity matters. |
| [last] | <code>Boolean</code> | <code>undefined</code> | If true or any truthy value, will look for the last occurence of the characters specified. |

**Example**  
```js
substringBefore('LOREM_IPSUM DOLOR_SIT AMET', '_');
// => 'LOREM'

substringBefore('LOREM_IPSUM DOLOR_SIT AMET', '_', true);
// => 'LOREM_IPSUM DOLOR'

substringBefore('LOREM_IPSUM DOLOR_SIT AMET', 'SIT');
// => 'LOREM_IPSUM DOLOR_'

substringBefore('LOREM_IPSUM DOLOR_SIT AMET', '???'); // using a sequense of characters that does not exist
// => ''

substringBefore('🍎🍐🍊🍌🍉🍇🍓', '🍊');
// => '🍎🍐'

substringBefore('🍎🍐🍊🍌🍉🍇🍓', '🍎');
// => ''
```
