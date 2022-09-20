<a name="truncate"></a>

## truncate(string, [characterCount], [delimiter]) ⇒ <code>String</code>
Truncates a string based on character count.

**Returns**: <code>String</code> - The truncated string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.
- <code>TypeError</code> If `characterCount` is not number.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | The string to truncate. |
| [characterCount] | <code>Number</code> |  | The number of characters the truncated string contains.        If ommitted or falsy, the initial string is returned. |
| [delimiter] | <code>String</code> | <code>&quot;&quot;</code> | The delimiter to add at the end of the truncated string. |

**Example**  
```js
const str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptas tempora nihil commodi laborum sit eum atque iusto temporibus, odit natus odio accusantium id, labore, possimus laboriosam. Eos, ducimus, blanditiis.';

truncate(str, 50, '...');
// => 'Lorem ipsum dolor sit amet, consectetur adipisicin...'

truncate(str, 30, '---');
// => 'Lorem ipsum dolor sit amet, co---'

truncate(str, 30);
// => 'Lorem ipsum dolor sit amet, co'

truncate(str, 0);
// => ''

truncate(str, 0, '...');
// => '...'

truncate(str, 3.7);
// => 'Lor'

truncate(str, -1);
// => Returns the original string

truncate(str, NaN);
// => Returns the original string

truncate({item: str}, 10);
// Throws TypeError

truncate(str, '10');
// Throws TypeError
```
