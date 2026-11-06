<a name="lines"></a>

## lines(str) ⇒ <code>Array</code>
Splits a string into an array of lines.

Recognizes LF (`\n`), CRLF (`\r\n`), CR (`\r`), Unicode line separator
(`\u2028`), and Unicode paragraph separator (`\u2029`).

Empty lines are preserved, including those at the beginning or end
of the string. Line terminators are excluded from the result.

**Kind**: global function  
**Returns**: <code>Array</code> - An array containing the lines of the string.  
**Throws**:

- <code>TypeError</code> If `str` is not a string.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to split into lines. |

**Example**  
```js
lines('Hello\nworld');
// => ['Hello', 'world']

lines('Hello\r\nworld');
// => ['Hello', 'world']

lines('Hello\rworld');
// => ['Hello', 'world']

lines('Hello\u2028world\u2029again');
// => ['Hello', 'world', 'again']

lines('Hello\n\nworld\n');
// => ['Hello', '', 'world', '']

lines('');
// => ['']
```
