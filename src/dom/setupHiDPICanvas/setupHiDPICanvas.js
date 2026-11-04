/**
 * Configures an HTMLCanvasElement for sharp rendering on high-DPI screens.
 * Adjusts the canvas resolution to match the device pixel ratio while
 * preserving its display size in CSS pixels.
 *
 * The canvas must have a defined display size in CSS, without padding.
 * Call this function again when the canvas size or device pixel ratio
 * changes. Resizing the canvas clears its contents, so it must be redrawn.
 *
 * @param {HTMLCanvasElement} canvas The canvas element to configure.
 * @throws {Error} If a 2D rendering context is unavailable.
 * @returns {CanvasRenderingContext2D} The 2D rendering context.
 * @example
 *
 * // HTML: <canvas style="width: 300px; height: 150px;"></canvas>
 * const canvas = document.querySelector('canvas');
 * const ctx = setupHiDPICanvas(canvas);
 *
 * // Draw using CSS pixel coordinates.
 * ctx.beginPath();
 * ctx.arc(150, 75, 50, 0, 2 * Math.PI);
 * ctx.fillStyle = '#ff0000';
 * ctx.fill();
 */
export const setupHiDPICanvas = (canvas) => {
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Unable to get a 2D rendering context');
  }

  const dpr = window.devicePixelRatio || 1;
  const { clientWidth, clientHeight } = canvas;

  const scaledWidth = Math.round(clientWidth * dpr);
  const scaledHeight = Math.round(clientHeight * dpr);

  if (canvas.width !== scaledWidth || canvas.height !== scaledHeight) {
    canvas.width = scaledWidth;
    canvas.height = scaledHeight;
  }

  ctx.setTransform(
    clientWidth ? scaledWidth / clientWidth : 1,
    0,
    0,
    clientHeight ? scaledHeight / clientHeight : 1,
    0,
    0
  );

  return ctx;
};
