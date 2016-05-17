<a name="removeSuffix"></a>

## removeSuffix(subjectString, [suffix]) ⇒ <code>String</code>
Removes suffix from start of a string.

**Kind**: global function  
**Returns**: <code>String</code> - The result string.  
**Category**: String  

| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The original string. |
| [suffix] | <code>String</code> | The suffix substring to remove from the original string. |

**Example**  
```js
removeSuffix('foobar__', '__');
// -> 'foo'

removeSuffix('foobar__', '??');
// -> 'foobar'

removeSuffix('foobar__');
// -> 'foobar'

removeSuffix('foobar__', {});
// -> TypeError
```
