<a name="repeat"></a>

## repeat(subjectString, [count]) ⇒ <code>String</code>
Constructs and returns a new string which contains the specified number
of copies of the string on which it was called, concatenated together.

**Returns**: <code>String</code> - A new string containing the specified number of copies of the given string.  
**Category**: String  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.
- <code>RangeError</code> If `count` is a negative number or overflows maximum string size.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | The string to process. |
| [count] | <code>Number</code> | <code>0</code> | An integer indicating the number of times to repeat the string. |

**Example**  
```js
repeat('a', 4);
// -> 'aaaa'

repeat('a', 2.5);
// -> 'aa' (count will be converted to integer)

repeat('a', 0);
// -> ''

repeat('a', null);
// -> ''

repeat('a');
// -> ''

repeat('a', NaN);
// -> ''

repeat('a', Infinity);
// -> Throws RangeError

repeat('a', -Infinity);
// -> Throws RangeError

repeat('a', -2);
// -> Throws RangeError

repeat('a', 1/0);
// -> Throws RangeError
```
