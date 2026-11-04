import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { debounce } from './debounce.js';

describe('Function/debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('debounces a function; triggers the function on the trailing edge', () => {
    const func = vi.fn();
    const delay = 1000; // ms
    const debouncedFunc = debounce(func, delay);

    // Call it immediately
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(0);

    // Call it several times with 500ms (< 1000ms) between each call
    for (let i = 0; i < 5; i += 1) {
      vi.advanceTimersByTime(500);
      debouncedFunc();
    }

    expect(func).toHaveBeenCalledTimes(0);

    // Fast forward time
    vi.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('debounces a function; triggers the function on the leading edge', () => {
    const func = vi.fn();
    const delay = 1000; // ms
    const debouncedFunc = debounce(func, delay, true);

    // Call it immediately
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    // Call it several times with 500ms (< 1000ms) between each call
    for (let i = 0; i < 5; i += 1) {
      vi.advanceTimersByTime(500);
      debouncedFunc();
    }

    expect(func).toHaveBeenCalledTimes(1);

    // Fast forward time
    vi.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('throws if first argument is not a function', () => {
    expect(() => {
      return debounce();
    }).toThrow(new TypeError('Expected a function for first argument'));
  });
});
