<a name="startsWith"></a>

## startsWith(subjectString, searchString, [position]) ⇒ <code>Boolean</code>
Determines whether a string begins with the characters of another string.

**Returns**: <code>Boolean</code> - True if `subjectString` starts with `searchString`, else false.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | The string to process. |
| searchString | <code>String</code> |  | The characters to be searched for at the start of the string. |
| [position] | <code>Number</code> | <code>0</code> | The position in the original string at which to begin searching for `prefix`. |

**Example**  
```js
var str = 'Lorem ipsum dolor sit amet';

startsWith(str, 'Lorem');
// -> true

startsWith(str, 'Lorem', 0);
// -> true

startsWith(str, 'ipsum');
// -> false

startsWith(str, 'orem', 1);
// -> true
```
