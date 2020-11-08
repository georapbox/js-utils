<a name="subStr"></a>

## subStr(subjectString, [n]) ⇒ <code>String</code>
Returns a substring denoted by n (positive or negative) characters.

**Returns**: <code>String</code> - The result string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to process. |
| [n] | <code>Number</code> | The number of characters of the new string.        If `n >= 0`, returns a substring from the left end of the string.        If `n < 0`, returns a substring from the right end of the string.        If `n` is not of type number, returns the whole string intact. |

**Example**  
```js
var str = 'Lorem ispum dolor sit amet.';

subStr(str, 5));
// -> 'Lorem'

subStr(str, -3));
// -> 'et.'

subStr(str, 0));
// -> ''

subStr(str, parseInt('-4', 10)));
// -> 'met.'

subStr(str, 'hello'));
// -> 'Lorem ispum dolor sit amet.'
```
