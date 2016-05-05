### [Strings](../) > unescapeHTML

```js
unescapeHTML(subjectString)
```

Unscapes a HTML string.

#### Arguments

- `subjectString` _(string)_: The HTML string to unescape.

#### Returns

_(string)_: Returns the result string.

#### Example
```js
unescapeHTML('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;');
// -> '<script src="main.js"><\/script>'

unescapeHTML('Hello &amp; &lt;span&gt;World&lt;/span&gt;');
// -> 'Hello & <span>World</span>'

unescapeHTML('&lt;p data-id=&quot;1&quot;&gt;lorem ipsum&lt;/p&gt;');
// -> '<p data-id="1">lorem ipsum</p>'
```
