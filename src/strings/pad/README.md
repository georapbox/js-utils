<a name="pad"></a>

## pad(subjectString, len, [chars]) ⇒ <code>String</code>
Pad `subjectString` on both sides to the given `len`, with optional `chars` defaulting to a space.

**Returns**: <code>String</code> - The result padded string.  
**Category**: String  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.
- <code>TypeError</code> If `len` is not number.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | The string to process. |
| len | <code>Number</code> |  | The length to pad the string. |
| [chars] | <code>String</code> | <code>&#x27; &#x27;</code> | The character(s) to use for padding. |

**Example**  
```js
pad('Hello', 9);
// -> "  Hello  "

pad('Hello', 9, '-');
// -> "--Hello--"

pad('Hello', 6, '-');
// -> '-Hello'

pad('Hello', 5, '-');
// -> 'Hello' (len is the same as str.length)
```
