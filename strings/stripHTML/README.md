##stripHTML
>Returns a new string with all HTML tags removed.

####Syntax
```js
stripHTML(string)
```

- <code>string {String}</code>

The string to strip.

####Example
```js
var str = '<p>Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit.<br/> <span class="mollitia">Mollitia</span> quos dicta, doloremque veritatis.</p>';

stripHTML(str);
// => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quos dicta, doloremque veritatis."
```