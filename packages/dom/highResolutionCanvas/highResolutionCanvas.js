/**
 * Processes an `HTMLCanvasElement` by downsampling on the canvas to ensure that the drawn visuals do not look blurry on high-DPI screens.
 *
 * Downsampling on the canvas is achieved by performing the following three actions:
 * - Figure out the amount we need to scale our visuals by, to match the intended device's DPI setting.
 * - Physically increase the size of our canvas by the scale amount and ensure all drawing operations happen at this larger size.
 * - Use CSS to scale down the size of the larger sized canvas back to its original, smaller size.
 *
 * @param {HTMLCanvasElement} canvas The `HTMLCanvasElement` to process.
 * @returns {CanvasRenderingContext2D} The 2D rendering context for the drawing surface of the `HTMLCanvasElement`.
 * @example
 *
 * const canvas = document.querySelector('canvas');
 *
 * const context = highResolutionCanvas(canvas);
 *
 * // Use the `context` variable from now on to access the `CanvasRenderingContext2D` interface.
 * context.beginPath();
 * context.arc(200, 200, 100, 0, 2 * Math.PI, true);
 * context.fillStyle = "#ff0000";
 * context.fill();
 */
const highResolutionCanvas = canvas => {
  const ctx = canvas.getContext('2d');
  const devicePixelRatio = window.devicePixelRatio || 1;

  const backingStoreRatio = ctx.webkitBackingStorePixelRatio
    || ctx.mozBackingStorePixelRatio
    || ctx.msBackingStorePixelRatio
    || ctx.oBackingStorePixelRatio
    || ctx.backingStorePixelRatio
    || 1;

  const ratio = devicePixelRatio / backingStoreRatio;

  if (devicePixelRatio !== backingStoreRatio) {
    const oldWidth = canvas.width;
    const oldHeight = canvas.height;

    canvas.width = Math.round(oldWidth * ratio);
    canvas.height = Math.round(oldHeight * ratio);
    canvas.style.width = oldWidth + 'px';
    canvas.style.height = oldHeight + 'px';

    ctx.scale(ratio, ratio);
  }

  return ctx;
};

module.exports = highResolutionCanvas;
