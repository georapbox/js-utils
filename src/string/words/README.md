<a name="words"></a>

## words(subjectString) ⇒ <code>Array</code>
Splits string into an array of its words. Any punctuation is stripped.

**Returns**: <code>Array</code> - Returns array that contains the string's words.  
**Throws**:

- <code>TypeError</code> Throws if `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to process. |

**Example**  
```js
words('Hello world! \n This is a message from outer\tspace.');
// => ['Hello', 'world', 'This', 'is', 'a', 'message', 'from', 'outer', 'space']

words('🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🥭');
// => ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭']
```
