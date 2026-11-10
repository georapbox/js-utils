import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { throttle } from './throttle.js';

describe('Function/throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('invokes the function immediately on the leading edge', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    throttled('first');

    expect(fn).toHaveBeenCalledExactlyOnceWith('first');
  });

  it('delays subsequent calls until the interval expires', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    throttled('first');

    vi.advanceTimersByTime(50);
    throttled('second');

    expect(fn).toHaveBeenCalledOnce();

    vi.advanceTimersByTime(49);
    expect(fn).toHaveBeenCalledOnce();

    vi.advanceTimersByTime(1);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenLastCalledWith('second');
  });

  it('uses the arguments from the most recent trailing-edge call', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    throttled('first', 1);

    vi.advanceTimersByTime(30);
    throttled('second', 2);

    vi.advanceTimersByTime(30);
    throttled('third', 3);

    vi.advanceTimersByTime(40);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, 'first', 1);
    expect(fn).toHaveBeenNthCalledWith(2, 'third', 3);
  });

  it('continues executing periodically during frequent calls', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    throttled();

    for (let i = 0; i < 5; i++) {
      vi.advanceTimersByTime(50);
      throttled();
    }

    expect(fn).toHaveBeenCalledTimes(3);

    vi.advanceTimersByTime(50);

    expect(fn).toHaveBeenCalledTimes(4);
  });

  it('does not invoke the function again without subsequent calls', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    throttled();

    vi.advanceTimersByTime(500);

    expect(fn).toHaveBeenCalledOnce();
  });

  it('allows immediate execution after the interval has elapsed', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    throttled('first');

    vi.advanceTimersByTime(150);
    throttled('second');

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, 'first');
    expect(fn).toHaveBeenNthCalledWith(2, 'second');
  });

  it('preserves the this binding on the leading edge', () => {
    const fn = vi.fn(function (value) {
      return this.prefix + value;
    });

    const throttled = throttle(fn, 100);

    throttled.call({ prefix: 'first-' }, 'a');

    expect(fn).toHaveReturnedWith('first-a');
  });

  it('preserves the this binding of the most recent trailing-edge call', () => {
    const fn = vi.fn(function (value) {
      return this.prefix + value;
    });

    const throttled = throttle(fn, 100);

    throttled.call({ prefix: 'first-' }, 'a');

    vi.advanceTimersByTime(50);
    throttled.call({ prefix: 'second-' }, 'b');

    vi.advanceTimersByTime(50);

    expect(fn).toHaveReturnedWith('second-b');
  });

  it('returns undefined regardless of the original function result', () => {
    const fn = vi.fn(() => 'result');
    const throttled = throttle(fn, 100);

    expect(throttled()).toBeUndefined();
    expect(throttled()).toBeUndefined();
  });

  it('supports the default interval of zero', () => {
    const fn = vi.fn();
    const throttled = throttle(fn);

    throttled();
    throttled();
    throttled();

    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('prevents recursive invocation from triggering another immediate execution', () => {
    const fn = vi.fn(recursive);
    const throttled = throttle(fn, 100);

    function recursive() {
      if (fn.mock.calls.length === 1) {
        throttled();
      }
    }

    throttled();

    expect(fn).toHaveBeenCalledOnce();

    vi.advanceTimersByTime(100);

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('throws a TypeError when the first argument is not a function', () => {
    for (const fn of [undefined, null, 42, 'function', true, {}]) {
      expect(() => throttle(fn)).toThrow(new TypeError('Expected a function for first argument'));
    }
  });
});
