<a name="escapeHTML"></a>

## escapeHTML(subjectString) ⇒ <code>String</code>

Converts the characters `&`, `<`, `>`, `"` and `'` in a string to their corresponding HTML entities.

**Returns**: <code>String</code> - Returns the escaped string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The HTML string to escape. |

**Example**  
```js
escapeHTML('<script src="main.js"></script>');
// => '&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;'

escapeHTML('Hello & <span>World</span>');
// => 'Hello &amp; &lt;span&gt;World&lt;/span&gt;'

escapeHTML('<p data-id="1">lorem ipsum</p>');
// => '&lt;p data-id=&quot;1&quot;&gt;lorem ipsum&lt;/p&gt;'
```
