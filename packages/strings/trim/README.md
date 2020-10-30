<a name="trim"></a>

## trim(subjectString) ⇒ <code>String</code>
Removes whitespace from both ends of a string.
Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.)
and all the line terminator characters (LF, CR, etc.).

**Returns**: <code>String</code> - The result string.  
**Category**: String  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to trim. |

**Example**  
```js
trim('    Lorem ipsum dolor si amet.    ');
// -> 'Lorem ipsum dolor si amet.'
```
