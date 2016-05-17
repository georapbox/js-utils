<a name="collapseWhitespace"></a>

## collapseWhitespace(subjectString) ⇒ <code>String</code>
Converts all adjacent whitespace characters to a single space.

**Kind**: global function  
**Returns**: <code>String</code> - The final string with all adjacent whitespace converted to single space.  
**Category**: String  

| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to process. |

**Example**  
```js
collapseWhitespace('  Lorem   \t ispum dolor sit      \t amet.  ');
// -> 'Lorem ispum dolor sit amet.'
```
