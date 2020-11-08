<a name="contains"></a>

## contains(subjectString, searchString, [position]) ⇒ <code>Boolean</code>
Determines whether one string may be found within another string, returning true or false as appropriate.

**Returns**: <code>Boolean</code> - True if searchString is found within subjectString, else false.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | The string to process. |
| searchString | <code>String</code> |  | A string to be searched for within the original string. |
| [position] | <code>Number</code> | <code>0</code> | The position in the original string at which to begin searching for searchString; defaults to 0. |

**Example**  
```js
contains(str, 'To be');
// -> true

contains(str, 'question');
// -> true

contains(str, 'nonexistent');
// -> false

contains(str, 'To be', 1);
// -> false

contains(str, 'TO BE');
// -> false
```
