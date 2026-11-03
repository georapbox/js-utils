import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mediaQuery } from './mediaQuery.js';

describe('dom/mediaQuery', () => {
  const mediaQueryString = '(min-width: 480px) and (max-width: 768px)';

  let matchMediaListener;
  let unsubscribeMediaQuery;

  beforeEach(() => {
    matchMediaListener = vi.fn((matches) => matches);

    vi.stubGlobal(
      'matchMedia',
      vi.fn((query) => {
        return {
          matches: query === mediaQueryString,
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn()
        };
      })
    );
  });

  afterEach(() => {
    unsubscribeMediaQuery?.();
    unsubscribeMediaQuery = undefined;
    vi.unstubAllGlobals();
  });

  it('calls the listener immediately by default', () => {
    unsubscribeMediaQuery = mediaQuery(mediaQueryString, matchMediaListener);

    expect(matchMediaListener).toHaveBeenCalledWith(true);
  });

  it('does not call the listener immediately when disabled', () => {
    unsubscribeMediaQuery = mediaQuery(mediaQueryString, matchMediaListener, false);

    expect(matchMediaListener).not.toHaveBeenCalled();
  });

  it('throws when invalid arguments are provided', () => {
    expect(() => {
      return mediaQuery(null);
    }).toThrow(new TypeError('Expected a string for first argument'));

    expect(() => {
      return mediaQuery(mediaQueryString);
    }).toThrow(new TypeError('Expected a function for second argument'));
  });
});
