### [Strings](../) > escapeHTML

```js
escapeHTML(subjectString)
```

Escapes a HTML string.

#### Arguments

- `subjectString` _(string)_: The HTML string to escape.

#### Returns

_(string)_: Returns the escaped string.

#### Examples
```js
escapeHTML('<script src="main.js"><\/script>');
// -> ''&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;''

escapeHTML('Hello & <span>World</span>');
// -> 'Hello &amp; &lt;span&gt;World&lt;/span&gt;'

escapeHTML('<p data-id="1">lorem ipsum</p>');
// -> '&lt;p data-id=&quot;1&quot;&gt;lorem ipsum&lt;/p&gt;'
```
