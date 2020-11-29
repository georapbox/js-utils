<a name="replaceAll"></a>

## replaceAll(subjectString, subString, replaceString, [caseInsensitive]) ⇒ <code>String</code>
Creates a new string with all occurrences of `subString` replaced with `replaceString`.

**Returns**: <code>String</code> - Returns the final string.  
**Throws**:

- <code>TypeError</code> Throws if `subjectString` is not string.
- <code>TypeError</code> Throws if `subString` is not string.
- <code>TypeError</code> Throws if `replaceString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The initial string. |
| subString | <code>String</code> | The substring to replace. |
| replaceString | <code>String</code> | The substring to replace with. |
| [caseInsensitive] | <code>Boolean</code> | If true or any truthy value, the lookup is case insensitive. |

**Example**  
```js
replaceAll('The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?', 'dog', 'ferret');
// -> 'The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?'

replaceAll('The quick brown fox jumps over the lazy dog.', ' ', '-');
// -> 'The-quick-brown-fox-jumps-over-the-lazy-dog.'

replaceAll('The quick brown\tfox jumps\tover the lazy dog.', '\t', ' ');
// -> 'The quick brown fox jumps over the lazy dog.'

replaceAll('The quick brown fox jumps over the lazy DOG. If the dog reacted, was it really lazy?', 'dog', 'ferret', true);
// -> 'The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?'
```
