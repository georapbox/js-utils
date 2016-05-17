<a name="stripPunctuation"></a>

## stripPunctuation(subjectString) ⇒ <code>String</code>
Removes all of the punctuation from a string.

**Kind**: global function  
**Returns**: <code>String</code> - The stripped string.  
**Category**: String  

| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to strip the punctuation from. |

**Example**  
```js
var str = ';``?You can\'t [make] an *ome*let + wit&&hout \\ %break_ing/% ~ a few eg-gs.!@#-"$"+:';

stripPunctuation(str);
// -> You cant make an omelet without breaking a few eggs
```
