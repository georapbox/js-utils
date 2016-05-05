### [Strings](../) > wrapHTML

```js
wrapHTML(subjectString, nodeName [, nodeAttributes])
```

Wraps a string with a HTML tag with attributes if specified.

#### Arguments

- `subjectString` _(string)_: The string to wrap with the HTML tag.

- `nodeName` _(string)_: The HTML tag name that we want to wrap the string with.

- `[nodeAttributes]` _(object)_: Optional. The desired attributes of the HTML element.

#### Returns

_(string)_: Returns the wrapped string.

#### Examples
```js
var str = 'Lorem ipsum dolor sit amet.';

var p = wrapHTML(str, 'p');
// -> '<p>Lorem ipsum dolor sit amet.</p>'

var div = wrapHTML(p, 'div', {
    class: 'myClass',
    id: 'myId',
    dataType: 'myType' // Note that camelized keys are dasherized. Use string format to avoid this action.
});
// -> '<div class="myClass" id="myId" data-type="myType"><p>Lorem ipsum dolor sit amet.</p></div>'
```
