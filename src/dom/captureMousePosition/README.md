<a name="captureMousePosition"></a>

## captureMousePosition(element) ⇒ <code>Object</code>
Captures the mouse position on a specific HTML element.

**Kind**: global function  
**Returns**: <code>Object</code> - An object representing the position (x, y) of mouse.  
**Category**: DOM  
**Throws**:

- <code>TypeError</code> If `element` is not a DOM element.


| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | The HTML element to capture mouse position on. |

**Example**  
```js
var element = document.getElementById('some_element');
var mousePosition = captureMousePosition(element);

element.addEventListener('mousemove', function () {
  console.log(mousePosition);
}, false);
```
