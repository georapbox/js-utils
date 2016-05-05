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
unescapeHTML('&lt;p&gt;Hello World!&lt;/p&gt;');
// -> <p>Hello World!</p>
```
