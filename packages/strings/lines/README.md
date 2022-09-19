<a name="lines"></a>

## lines(subjectString) ⇒ <code>Array</code>
Creates an array with the lines of a a string.

**Returns**: <code>Array</code> - An array or strings containing the lines of the string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to process. |

**Example**  
```js
const str = 'You can\'t make\nan omelet without\r\nbreaking a few eggs.';
const str2 = `You can\'t make
  an omelet without
  breaking a few eggs.`;

lines(str);
// => ['You can't make', 'an omelet without', 'breaking a few eggs.']

lines(str2);
// => ['You can't make', 'an omelet without', 'breaking a few eggs.']
```
