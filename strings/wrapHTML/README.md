##wrapHTML
>Wraps a string with a HTML tag with attributes if specified.

####Syntax
```js
wrapHTML(string, nodeName, [nodeAttribures])
```

- <code>string {String}</code>

The string to wrap with the HTML tag.

- <code>nodeName {String}</code>

The HTML tag name that we want to wrap the string with.

- <code>nodeAttributes {Object} (Optional)</code>

The desired attributes of the HTML element.

####Example
```js
var str = 'Lorem ipsum dolor sit amet.';

var p = wrapHTML(str, 'p');

var div = wrapHTML(p, 'div', {
    class: 'myClass',
    id: 'myId',
    dataType: 'myType' // Note that camelized keys are dasherized. Use string format to avoid this action.
});

// => "<div class="myClass" id="myId" data-type="myType"><p>Lorem ipsum dolor sit amet.</p></div>"
```