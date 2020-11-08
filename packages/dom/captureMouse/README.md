<a name="captureMouse"></a>

## captureMouse(element, [callback]) ⇒ <code>Object</code>
Captures the mouse position on a specific HTML element.

**Returns**: <code>Object</code> - An object containing the position object (x, y) of mouse and an unbind method.  
**Throws**:

- <code>TypeError</code> If `element` is not a DOM element.
- <code>TypeError</code> If `callback` is defined but is not a function.


| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | The HTML element to capture mouse position on. |
| [callback] | <code>function</code> | A callback function to be executed on mouse move taking the `position` object as argument. |

**Example**  
```js
var element = document.getElementById('some_element');

// Example 1
var mouse = captureMouse(element);

element.addEventListener('mousemove', function () {
  var x = mouse.position.x;
  var y = mouse.position.y;
}, false);

// Example 2 - Utilizing the callback function
var mouse = captureMouse(element, function (position) {
  var x = position.x;
  var y = position.y;
});

// Unbinding capturing mouse move
var mouse = captureMouse(element);

mouse.unbind(); // Unbind immediately.

mouse.unbind(5000); // Unbind after 5 seconds.
```
