<a name="unescapeHTML"></a>

## unescapeHTML(subjectString) ⇒ <code>String</code>
Unescapes a HTML string.

**Returns**: <code>String</code> - The unescaped string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The HTML string to unescape. |

**Example**  
```js
unescapeHTML('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;');
// => '<script src="main.js"><\/script>'

unescapeHTML('Hello &amp; &lt;span&gt;World&lt;/span&gt;');
// => 'Hello & <span>World</span>'

unescapeHTML('&lt;p data-id&#x3D;&quot;1&quot;&gt;lorem ipsum&lt;&#x2F;p&gt;');
// => '<p data-id="1">lorem ipsum</p>'
```
