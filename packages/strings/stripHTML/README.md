<a name="stripHTML"></a>

## stripHTML(subjectString) ⇒ <code>String</code>
Removes all HTML tags from a string.

**Returns**: <code>String</code> - The stripped string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to strip. |

**Example**  
```js
const str = '<p>Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit.<br/> <span class="mollitia">Mollitia</span> quos dicta, doloremque veritatis.</p>';

stripHTML(str);
// => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quos dicta, doloremque veritatis.'
```
