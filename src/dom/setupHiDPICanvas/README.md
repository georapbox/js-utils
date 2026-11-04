<a name="setupHiDPICanvas"></a>

## setupHiDPICanvas ⇒ <code>CanvasRenderingContext2D</code>
Configures an HTMLCanvasElement for sharp rendering on high-DPI screens.
Adjusts the canvas resolution to match the device pixel ratio while
preserving its display size in CSS pixels.

The canvas must have a defined display size in CSS, without padding.
Call this function again when the canvas size or device pixel ratio
changes. Resizing the canvas clears its contents, so it must be redrawn.

**Returns**: <code>CanvasRenderingContext2D</code> - The 2D rendering context.  
**Throws**:

- <code>Error</code> If a 2D rendering context is unavailable.


| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>HTMLCanvasElement</code> | The canvas element to configure. |

**Example**
```js
// HTML: <canvas style="width: 300px; height: 150px;"></canvas>
const canvas = document.querySelector('canvas');
const ctx = setupHiDPICanvas(canvas);

// Draw using CSS pixel coordinates.
ctx.beginPath();
ctx.arc(150, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = '#ff0000';
ctx.fill();
```
