<a name="wrapHTML"></a>

## wrapHTML(subjectString, nodeName, [nodeAttributes]) ⇒ <code>String</code>
Wraps a string with a HTML tag with attributes if specified.

**Returns**: <code>String</code> - The wrapped string.  
**Category**: String  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.
- <code>TypeError</code> If `nodeName` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to wrap with the HTML tag. |
| nodeName | <code>String</code> | The HTML tag name that we want to wrap the string with. |
| [nodeAttributes] | <code>Object</code> | The desired attributes of the HTML element. |

**Example**  
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
