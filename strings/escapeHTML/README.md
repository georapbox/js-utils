##escapeHTML
>Escapes a HTML string.

####Syntax
```js
escapeHTML(html)
```

- <code>html</code>

The HTML string to escape.

####Example
```js
escapeHTML('<script src="main.js"><\/script>');
// &lt;script src=&#34;main.js&#34;&gt;&lt;/script&gt;

escapeHTML('Hello & <span>World</span>');
// Hello &amp; &lt;span&gt;World&lt;/span&gt;
```