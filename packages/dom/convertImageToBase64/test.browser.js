import { afterEach, describe, expect, it, vi } from 'vitest';
import { convertImageToBase64 } from './convertImageToBase64.js';

describe('dom/convertImageToBase64', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('converts a resource to a Base64 Data URI', async () => {
    const blob = new Blob(['hello'], { type: 'image/png' });

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(blob)));

    const result = await convertImageToBase64('/image.png');

    expect(result).toBe('data:image/png;base64,aGVsbG8=');
    expect(fetch).toHaveBeenCalledWith('/image.png');
  });

  it('preserves the MIME type of the resource', async () => {
    const blob = new Blob(['hello'], { type: 'image/jpeg' });

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(blob)));

    const result = await convertImageToBase64('/image.jpg');

    expect(result).toBe('data:image/jpeg;base64,aGVsbG8=');
  });

  it('rejects when the HTTP response is unsuccessful', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 404 })));

    await expect(convertImageToBase64('/missing.png')).rejects.toThrow('Failed to fetch image: 404');
  });

  it('rejects when fetching the resource fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')));

    await expect(convertImageToBase64('/image.png')).rejects.toThrow('Failed to fetch');
  });

  it('rejects when FileReader fails', async () => {
    const blob = new Blob(['hello'], { type: 'image/png' });

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(blob)));

    const readAsDataURL = vi.spyOn(FileReader.prototype, 'readAsDataURL');

    readAsDataURL.mockImplementation(function () {
      queueMicrotask(() => {
        this.onerror?.(new ProgressEvent('error'));
      });
    });

    // The implementation rejects with reader.error, which is null
    // in this mocked failure scenario.
    await expect(convertImageToBase64('/image.png')).rejects.toBeNull();

    expect(readAsDataURL).toHaveBeenCalledOnce();
  });
});
