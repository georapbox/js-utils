<a name="module_CanvasContext"></a>

## CanvasContext ⇒ <code>Object</code>
A class that provides jQuery-style chained access to 2D context methods and properties.

https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Canvas

**Returns**: <code>Object</code> - Returns the canvas context object.  
**Category**: HTML5 Canvas  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>Object</code> &#124; <code>String</code> | The HTML5 canvas element or a string representing the id of a canvas element. |

**Example**  
```js
// Use context to get access to underlying context
var canvas = document.getElementById('canvas');

var ctx = CanvasContext(canvas)
  .rect(0, 0, canvas.width, canvas.height)
  .lineWidth(20)
  .strokeStyle('dodgerblue')
  .fillStyle('rgba(14, 152, 230, 0.3)')
  .fill()
  .stroke()
  .context;

// Use property name as a function (but without arguments) to get the value
var strokeStyle = CanvasContext(canvas)
  .strokeStyle('rgb(50, 110, 210)')
  .strokeStyle();
```
