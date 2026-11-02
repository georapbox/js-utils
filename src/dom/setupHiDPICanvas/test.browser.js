import { afterEach, describe, expect, it, vi } from 'vitest';
import { setupHiDPICanvas } from './setupHiDPICanvas.js';

describe('dom/setupHiDPICanvas', () => {
  const createCanvas = (width = 300, height = 150) => {
    const canvas = document.createElement('canvas');

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    document.body.append(canvas);

    return canvas;
  };

  afterEach(() => {
    document.body.replaceChildren();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('returns the 2D rendering context', () => {
    const canvas = createCanvas();

    const ctx = setupHiDPICanvas(canvas);

    expect(ctx).toBeInstanceOf(CanvasRenderingContext2D);
    expect(ctx.canvas).toBe(canvas);
  });

  it('sets the bitmap resolution based on the device pixel ratio', () => {
    const canvas = createCanvas();

    setupHiDPICanvas(canvas);

    const dpr = window.devicePixelRatio || 1;

    expect(canvas.width).toBe(Math.round(300 * dpr));
    expect(canvas.height).toBe(Math.round(150 * dpr));
    expect(canvas.clientWidth).toBe(300);
    expect(canvas.clientHeight).toBe(150);
  });

  it('applies the correct context transformation', () => {
    const canvas = createCanvas();

    const ctx = setupHiDPICanvas(canvas);
    const transform = ctx.getTransform();

    expect(transform.a).toBe(canvas.width / canvas.clientWidth);
    expect(transform.d).toBe(canvas.height / canvas.clientHeight);
    expect(transform.b).toBe(0);
    expect(transform.c).toBe(0);
    expect(transform.e).toBe(0);
    expect(transform.f).toBe(0);
  });

  it('does not accumulate scaling on repeated calls', () => {
    const canvas = createCanvas();

    setupHiDPICanvas(canvas);
    const firstWidth = canvas.width;
    const firstHeight = canvas.height;

    const ctx = setupHiDPICanvas(canvas);
    const transform = ctx.getTransform();

    expect(canvas.width).toBe(firstWidth);
    expect(canvas.height).toBe(firstHeight);
    expect(transform.a).toBe(firstWidth / 300);
    expect(transform.d).toBe(firstHeight / 150);
  });

  it('updates the resolution when the CSS dimensions change', () => {
    const canvas = createCanvas();

    setupHiDPICanvas(canvas);

    canvas.style.width = '400px';
    canvas.style.height = '200px';

    const ctx = setupHiDPICanvas(canvas);
    const dpr = window.devicePixelRatio || 1;

    expect(canvas.clientWidth).toBe(400);
    expect(canvas.clientHeight).toBe(200);
    expect(canvas.width).toBe(Math.round(400 * dpr));
    expect(canvas.height).toBe(Math.round(200 * dpr));
    expect(ctx.getTransform().a).toBe(canvas.width / 400);
    expect(ctx.getTransform().d).toBe(canvas.height / 200);
  });

  it('does not resize the canvas when its bitmap dimensions are correct', () => {
    const canvas = createCanvas();
    const ctx = setupHiDPICanvas(canvas);

    ctx.fillStyle = '#ff0000';
    ctx.fillRect(0, 0, 10, 10);

    setupHiDPICanvas(canvas);

    const pixel = ctx.getImageData(1, 1, 1, 1).data;

    expect([...pixel]).toEqual([255, 0, 0, 255]);
  });

  it('handles zero-sized canvases', () => {
    const canvas = createCanvas(0, 0);

    const ctx = setupHiDPICanvas(canvas);
    const transform = ctx.getTransform();

    expect(canvas.width).toBe(0);
    expect(canvas.height).toBe(0);
    expect(transform.a).toBe(1);
    expect(transform.d).toBe(1);
  });

  it('excludes borders from the canvas dimensions', () => {
    const canvas = createCanvas();

    canvas.style.border = '2px solid black';

    setupHiDPICanvas(canvas);

    const dpr = window.devicePixelRatio || 1;

    expect(canvas.clientWidth).toBe(300);
    expect(canvas.clientHeight).toBe(150);
    expect(canvas.width).toBe(Math.round(300 * dpr));
    expect(canvas.height).toBe(Math.round(150 * dpr));
  });

  it('throws when a 2D rendering context is unavailable', () => {
    const canvas = createCanvas();

    vi.spyOn(canvas, 'getContext').mockReturnValue(null);

    expect(() => setupHiDPICanvas(canvas)).toThrow('Unable to get a 2D rendering context');
  });
});
