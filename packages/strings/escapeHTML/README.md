<a name="escapeHTML"></a>

## escapeHTML(subjectString) ⇒ <code>String</code>
Escapes a HTML string.

**Returns**: <code>String</code> - Returns the escaped string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The HTML string to escape. |

**Example**  
```js
escapeHTML('<script src="main.js"><\/script>');
// => '&lt;script src&#x3D;&quot;main.js&quot;&gt;&lt;&#x2F;script&gt;'

escapeHTML('Hello & <span>World</span>');
// => 'Hello &amp; &lt;span&gt;World&lt;&#x2F;span&gt;'

escapeHTML('<p data-id="1">lorem ipsum</p>');
// => '&lt;p data-id&#x3D;&quot;1&quot;&gt;lorem ipsum&lt;&#x2F;p&gt;'
```
