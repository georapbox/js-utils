### [Strings](../) > stripHTML

```js
stripHTML(subjectString)
```

Creates a new string with all HTML tags removed.

#### Arguments

- `subjectString` _(string)_: The string to strip.

#### Returns

_(string)_: Returns the result string.

#### Example
```js
var str = '<p>Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit.<br/> <span class="mollitia">Mollitia</span> quos dicta, doloremque veritatis.</p>';

stripHTML(str);
// -> "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quos dicta, doloremque veritatis."
```
