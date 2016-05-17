<a name="removePrefix"></a>

## removePrefix(subjectString, [prefix]) ⇒ <code>String</code>
Removes prefix from start of a string.

**Kind**: global function  
**Returns**: <code>String</code> - The result string.  
**Category**: String  

| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to process. |
| [prefix] | <code>String</code> | The prefix substring to remove from the original string. |

**Example**  
```js
removePrefix('__foo', '__');
// -> 'foo'

removePrefix('__foobar', '??');
// -> 'foobar'

removePrefix('__foobar');
// -> 'foobar'

removePrefix('__foobar', {});
// -> TypeError
```
