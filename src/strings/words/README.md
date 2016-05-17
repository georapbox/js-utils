<a name="words"></a>

## words(subjectString) ⇒ <code>Array</code>
Splits string into an array of its words.

**Kind**: global function  
**Returns**: <code>Array</code> - The string's words.  
**Category**: String  

| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to process. |

**Example**  
```js
words('Hello world!        \n This is a message     from outer\tspace.');
// -> ['Hello', 'world!', 'This', 'is', 'a', 'message', 'from', 'outer', 'space.']

words('');
// -> []

words();
// -> Throws TypeError.

words(100);
// -> Throws TypeError.
```
