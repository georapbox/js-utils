<a name="endsWith"></a>

## endsWith(subjectString, searchString, [position]) ⇒ <code>Boolean</code>
Determines whether a string ends with the characters of another string.

**Returns**: <code>Boolean</code> - True if `subjectString` ends with `searchString`, else false.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | The string to process. |
| searchString | <code>String</code> |  | The characters to be searched for at the end of the original string. |
| [position] | <code>Number</code> | <code>subjectString.length</code> | Search within this string as if this string were only this long;        defaults to the original string's actual length, clamped within the range established by this string's length. |

**Example**  
```js
var str = 'To be, or not to be, that is the question.';

endsWith(str, 'question.');
// -> true

endsWith(str, 'to be');
// -> false

endsWith(str, 'to be', 19);
// -> true
```
