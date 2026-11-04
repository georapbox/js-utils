<a name="stripPunctuation"></a>

## stripPunctuation(subjectString) ⇒ <code>String</code>
Removes all of the punctuation from a string.

**Returns**: <code>String</code> - Returns the reuslt string with all punctuation stripped.  
**Throws**:

- <code>TypeError</code> Throws if `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to strip the punctuation from. |

**Example**  
```js
const str = ';``?You can\'t [make] an *ome*let + wit&&hout \\ %break_ing/% ~ a few eg-gs.!@#-"$"+:';

stripPunctuation(str);
// => You cant make an omelet without breaking a few eggs
```
