###[Strings](../) > wrapHTML

```js
wrapHTML(string, nodeName [, nodeAttribures])
```

>Wraps a string with a HTML tag with attributes if specified.

- <code>string {string}</code>

The string to wrap with the HTML tag.

- <code>nodeName {string}</code>

The HTML tag name that we want to wrap the string with.

- <code>[nodeAttributes] {object}</code>

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