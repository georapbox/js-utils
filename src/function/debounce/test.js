import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { debounce } from './debounce.js';

describe('Function/debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('invokes the function after the delay on the trailing edge', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 1000);

    debounced();

    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(999);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('resets the trailing-edge timer on subsequent calls', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 1000);

    debounced();

    for (let i = 0; i < 5; i++) {
      vi.advanceTimersByTime(500);
      debounced();
    }

    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(999);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('uses the arguments from the most recent call on the trailing edge', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);

    debounced('first', 1);
    vi.advanceTimersByTime(50);
    debounced('second', 2);

    vi.advanceTimersByTime(100);

    expect(fn).toHaveBeenCalledExactlyOnceWith('second', 2);
  });

  it('preserves the this binding of the most recent trailing-edge call', () => {
    const fn = vi.fn(function (value) {
      return this.prefix + value;
    });
    const debounced = debounce(fn, 100);

    debounced.call({ prefix: 'first-' }, 'a');
    debounced.call({ prefix: 'second-' }, 'b');

    vi.advanceTimersByTime(100);

    expect(fn).toHaveReturnedWith('second-b');
  });

  it('invokes the function immediately on the leading edge', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 1000, true);

    debounced('first');

    expect(fn).toHaveBeenCalledExactlyOnceWith('first');

    vi.advanceTimersByTime(999);
    debounced('second');

    expect(fn).toHaveBeenCalledOnce();

    vi.advanceTimersByTime(1000);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('extends the leading-edge cooldown on subsequent calls', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 1000, true);

    debounced();

    for (let i = 0; i < 5; i++) {
      vi.advanceTimersByTime(500);
      debounced();
    }

    expect(fn).toHaveBeenCalledOnce();

    vi.advanceTimersByTime(999);
    debounced();

    expect(fn).toHaveBeenCalledOnce();

    vi.advanceTimersByTime(1000);
    debounced();

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('allows another leading-edge invocation after the delay', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100, true);

    debounced('first');
    vi.advanceTimersByTime(100);
    debounced('second');

    expect(fn).toHaveBeenNthCalledWith(1, 'first');
    expect(fn).toHaveBeenNthCalledWith(2, 'second');
  });

  it('preserves the this binding on the leading edge', () => {
    const fn = vi.fn(function (value) {
      return this.prefix + value;
    });
    const debounced = debounce(fn, 100, true);

    const result = debounced.call({ prefix: 'item-' }, 'one');

    expect(fn).toHaveReturnedWith('item-one');
    expect(result).toBeUndefined();
  });

  it('returns undefined in both modes', () => {
    const fn = vi.fn(() => 'result');

    expect(debounce(fn, 100)()).toBeUndefined();
    expect(debounce(fn, 100, true)()).toBeUndefined();
  });

  it('supports the default delay of zero', () => {
    const fn = vi.fn();
    const debounced = debounce(fn);

    debounced();
    debounced();

    expect(fn).not.toHaveBeenCalled();

    vi.runAllTimers();

    expect(fn).toHaveBeenCalledOnce();
  });

  it('prevents recursive invocation on the leading edge', () => {
    const fn = vi.fn(recursive);
    const debounced = debounce(fn, 100, true);

    function recursive() {
      debounced();
    }

    debounced();

    expect(fn).toHaveBeenCalledOnce();

    vi.runAllTimers();
    expect(fn).toHaveBeenCalledOnce();
  });

  it('preserves the cooldown when a leading-edge invocation throws', () => {
    const fn = vi.fn(() => {
      throw new Error('Failed');
    });
    const debounced = debounce(fn, 100, true);

    expect(() => debounced()).toThrow('Failed');

    expect(() => debounced()).not.toThrow();
    expect(fn).toHaveBeenCalledOnce();

    vi.advanceTimersByTime(100);

    expect(() => debounced()).toThrow('Failed');
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('throws a TypeError when the first argument is not a function', () => {
    for (const fn of [undefined, null, 42, 'function', true, {}]) {
      expect(() => debounce(fn)).toThrow(new TypeError('Expected a function for first argument'));
    }
  });
});
