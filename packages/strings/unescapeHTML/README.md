<a name="unescapeHTML"></a>

## unescapeHTML(subjectString) ⇒ <code>String</code>

Converts the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#34` and `&#39;` in a string to their corresponding characters.

**Returns**: <code>String</code> - The unescaped string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The HTML string to unescape. |

**Example**  
```js
unescapeHTML('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;');
// => '<script src="main.js"></script>'

unescapeHTML('Hello &amp; &lt;span&gt;World&lt;/span&gt;');
// => 'Hello & <span>World</span>'

unescapeHTML('&lt;p data-id=&quot;1&quot;&gt;lorem ipsum&lt;/p&gt;');
// => '<p data-id="1">lorem ipsum</p>'
```
