<a name="captureTouch"></a>

## captureTouch(element, [callback]) ⇒ <code>Object</code>
Captures the touch position on a specific HTML element.

**Kind**: global function  
**Returns**: <code>Object</code> - An object containing the position object (x, y) of touch and an unbind method.  
**Category**: DOM  
**Throws**:

- <code>TypeError</code> If `element` is not a DOM element.
- <code>TypeError</code> If `callback` is defined but is not a function.


| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | The HTML element to capture touch position on. |
| [callback] | <code>function</code> | A callback function to be executed on touch move taking the `position` object as argument. |

**Example**  
```js
var element = document.getElementById('some_element');

// Example 1
var touch = captureTouch(element);

element.addEventListener('touchmove', function () {
  var x = touch.position.x;
  var y = touch.position.y;
}, false);

// Example 2 - Utilizing the callback function
var touch = captureTouch(element, function (position) {
  var x = position.x;
  var y = position.y;
});

// Unbinding capturing touch move
var touch = captureTouch(element);

touch.unbind(); // Unbind immediately.

touch.unbind(5000); // Unbind after 5 seconds.
```
