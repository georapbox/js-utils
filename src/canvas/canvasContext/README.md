### [HTML5 Canvas](../) > CanvasContext

https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Canvas

```js
CanvasContext(canvas)
```

> A class that provides jQuery-style chained access to 2D context methods and properties.

- <code>canvas {Object|String}</code>

The HTML5 canvas element or a string representing the ```id``` of a canvas element.

#### Example
```js
// Use context to get access to underlying context
var canvas = document.getElementById('canvas');

var ctx = Canvas2DContext(canvas)
    .rect(0, 0, canvas.width, canvas.height)
    .lineWidth(20)
    .strokeStyle('dodgerblue')
    .fillStyle('rgba(14, 152, 230, 0.3)')
    .fill()
    .stroke()
    .context;

// Use property name as a function (but without arguments) to get the value
var strokeStyle = Canvas2DContext(canvas)
    .strokeStyle('rgb(50,110,210)')
    .strokeStyle();
```
