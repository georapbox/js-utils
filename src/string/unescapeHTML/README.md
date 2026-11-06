<a name="unescapeHTML"></a>

## unescapeHTML(str) ⇒ <code>string</code>
Converts supported HTML entities to their corresponding characters.

Decodes ampersands (&amp;), angle brackets (&lt; &gt;),
double quotes (&quot; &#34;), and single quotes (&#39;).

Only the listed entities are decoded. Other named or numeric HTML
entities remain unchanged. Decoding is performed in a single pass.

Does not sanitize HTML. The resulting string may contain HTML markup.

**Kind**: global function  
**Returns**: <code>string</code> - The unescaped string.  
**Throws**:

- <code>TypeError</code> If `str` is not a string.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to unescape. |

**Example**  
```js
unescapeHTML('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;');
// => '<script src="main.js"></script>'

unescapeHTML('Hello &amp; &lt;span&gt;World&lt;/span&gt;');
// => 'Hello & <span>World</span>'

unescapeHTML('&lt;p data-id=&quot;1&quot;&gt;Hello&lt;/p&gt;');
// => '<p data-id="1">Hello</p>'

unescapeHTML('It&#39;s a beautiful day!');
// => "It's a beautiful day!"

unescapeHTML('Tom &amp;amp; Jerry');
// => 'Tom &amp; Jerry'

unescapeHTML('Hello world');
// => 'Hello world'

unescapeHTML('');
// => ''
```
