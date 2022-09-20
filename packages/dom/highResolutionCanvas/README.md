<a name="highResolutionCanvas"></a>

## highResolutionCanvas(canvas) ⇒ <code>CanvasRenderingContext2D</code>
Processes an `HTMLCanvasElement` by downsampling on the canvas to ensure that the drawn visuals do not look blurry on high-DPI screens.

Downsampling on the canvas is achieved by performing the following three actions:

- Figure out the amount we need to scale our visuals by, to match the intended device's DPI setting.
- Physically increase the size of our canvas by the scale amount and ensure all drawing operations happen at this larger size.
- Use CSS to scale down the size of the larger sized canvas back to its original, smaller size.

**Returns**: <code>CanvasRenderingContext2D</code> - The 2D rendering context for the drawing surface of the `HTMLCanvasElement`.

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>HTMLCanvasElement</code> | The `HTMLCanvasElement` to process. |

**Example**
```js
const canvas = document.querySelector('canvas');

const context = highResolutionCanvas(canvas);

// Use the `context` variable from now on to access the `CanvasRenderingContext2D` interface.
context.beginPath();
context.arc(200, 200, 100, 0, 2 * Math.PI, true);
context.fillStyle = "#ff0000";
context.fill();
```
