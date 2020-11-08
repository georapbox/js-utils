<a name="subStrAfter"></a>

## subStrAfter(subjectString, characters, [last]) ⇒ <code>String</code>
Returns a substring after a specific sequence of character(s).
By default looks for the first occuerence of this sequence.
If the character or sequence of characters not found, returns the initial string.

**Returns**: <code>String</code> - The result string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.
- <code>TypeError</code> If `characters` is not string.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | The string to process. |
| characters | <code>String</code> |  | The seqquence of characters to use as delimiter. |
| [last] | <code>Boolean</code> | <code>false</code> | If true or any truthy value, will look for the last occurence of the characters specified. |

**Example**  
```js
subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', '_');
// -> 'IPSUM DOLOR_SIT AMET'

subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', '_', true);
// -> 'SIT AMET'

subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', 'SIT ');
// -> 'AMET'

subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', '?', true);
// -> 'LOREM_IPSUM DOLOR_SIT AMET'
```
