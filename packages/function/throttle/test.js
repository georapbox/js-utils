import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { throttle } from './throttle.js';

describe('Function/throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('limits the number of times a function can be called in a given period', () => {
    const setTimeoutSpy = vi.spyOn(globalThis, 'setTimeout');
    const func = vi.fn();
    const throttled = throttle(func);

    throttled();
    throttled();

    expect(setTimeoutSpy).toHaveBeenCalledTimes(1);

    expect(func).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(200);

    throttled();

    expect(setTimeoutSpy).toHaveBeenCalledTimes(2);
  });

  it('throws if first argument is not a function', () => {
    expect(() => {
      return throttle();
    }).toThrow(new TypeError('Expected a function for first argument'));
  });
});
