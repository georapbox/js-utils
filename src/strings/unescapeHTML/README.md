##unescapeHTML
>Unscapes a HTML string.

####Syntax
```js
unescapeHTML(str)
```

- <code>str {String}</code>

The HTML string to unescape.

####Example
```js
unescapeHTML('&lt;p&gt;Hello World!&lt;/p&gt;');
// => <p>Hello World!</p>
```