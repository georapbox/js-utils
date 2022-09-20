<a name="substringAfter"></a>

## substringAfter(subjectString, characters, [last]) ⇒ <code>String</code>
Returns a substring after a specific sequence of character(s).
By default looks for the first occuerence of this sequence.
If the character or sequence of characters not found, returns an empty string.

**Returns**: <code>String</code> - Returns the result string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.
- <code>TypeError</code> If `characters` is not string.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | The string to process. |
| characters | <code>String</code> |  | The sequence of characters to use as delimiter. Case sensitivity matters. |
| [last] | <code>Boolean</code> | <code>undefined</code> | If true or any truthy value, will look for the last occurence of the characters specified. |

**Example**  
```js
substringAfter('LOREM_IPSUM DOLOR_SIT AMET', '_');
// => 'IPSUM DOLOR_SIT AMET'

substringAfter('LOREM_IPSUM DOLOR_SIT AMET', '_', true);
// => 'SIT AMET'

substringAfter('LOREM_IPSUM DOLOR_SIT AMET', 'SIT ');
// => 'AMET'

substringAfter('LOREM_IPSUM DOLOR_SIT AMET', '???'); // using a sequense of characters that does not exist
// => ''

substringAfter('🍎🍐🍊🍌🍉🍇🍓', '🍊');
// => '🍌🍉🍇🍓'

substringAfter('🍎🍐🍊🍌🍉🍇🍓', '🍓');
// => ''
```
