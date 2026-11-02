<a name="escapeRegExp"></a>

## escapeRegExp(subjectString) ⇒ <code>String</code>

Escapes the `RegExp` special characters `^`, `$`, `\`, `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, and `|` in a string.

**Returns**: <code>String</code> - Returns the escaped string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to escape. |

**Example**
```js
escapeRegExp('[MDN](https://developer.mozilla.org/)');
// => '\\[MDN\\]\\(https://developer\\.mozilla\\.org/\\)'

escapeRegExp('*_* +_+ ...');
// => '\\*_\\* \\+_\\+ \\.\\.\\.'
```
