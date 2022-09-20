<a name="squash"></a>

## squash(subjectString, [squashEscapeSequences]) ⇒ <code>String</code>
Removes all spaces from a string; optionally removes any escape sequences such as `\t`, `\n`, `\f`, `\r` and `\v`.

**Returns**: <code>String</code> - The result string with all spaces removed.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The initial string to process. |
| [squashEscapeSequences] | <code>Boolean</code> | The characters to be searched for at the start of the string. |

**Example**  
```js
squash('Lorem ispum dolor sit amet');
// => 'Loremispumdolorsitamet'

squash('   Lorem   ispum   dolor sit amet  ');
// => 'Loremispumdolorsitamet'

squash('\tLorem \n\vispum \tdolor \fsit \n amet  ');
// => '\tLorem\n\vispum\tdolor\fsit\namet'

squash('\tLorem \n\vispum \tdolor \fsit \n amet  ', true);
// => 'Loremispumdolorsitamet'
```
