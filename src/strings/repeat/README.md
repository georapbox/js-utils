<a name="repeat"></a>

## repeat(subjectString, [count]) ⇒ <code>String</code>
Repeat a string 'count' times.

**Kind**: global function  
**Returns**: <code>String</code> - The result string.  
**Category**: String  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | the string to process. |
| [count] | <code>Number</code> | <code>0</code> | The times to repeat the string. |

**Example**  
```js
repeat('&nbsp;', 4);
// -> '&nbsp;&nbsp;&nbsp;&nbsp;'

repeat('&nbsp;', 2.5);
// -> '&nbsp;&nbsp;'

repeat('&nbsp;', 0);
// -> ''

repeat('&nbsp;', null);
// -> ''

repeat('&nbsp;');
// -> ''

repeat('&nbsp;', -2);
// -> ''

repeat('&nbsp;', Infinity);
// -> ''

repeat('&nbsp;', -Infinity);
// -> ''

repeat('&nbsp;', NaN);
// -> ''
```
