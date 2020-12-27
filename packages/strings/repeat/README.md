<a name="repeat"></a>

## repeat(subjectString, [count]) ⇒ <code>String</code>
Constructs and returns a new string which contains the specified number
of copies of the string on which it was called, concatenated together.

**Returns**: <code>String</code> - A new string containing the specified number of copies of the given string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.
- <code>TypeError</code> If `count` is not number.
- <code>RangeError</code> If `count` is a negative or zero number or is greater than `Number.MAX_SAFE_INTEGER`.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to process. |
| count | <code>Number</code> | An integer indicating the number of times to repeat the string. |

**Example**  
```js
repeat('a', 4);
// -> 'aaaa'

repeat('a', 2.5);
// -> 'aa' (count will be converted to integer)
```
