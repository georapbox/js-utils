import { describe, expect, it, vi } from 'vitest';
import { once } from './once.js';

describe('Function/once', () => {
  it('should execute a function only one time', () => {
    const fn = vi.fn();
    const canOnlyFireOnce = once(fn);

    canOnlyFireOnce('foo');
    canOnlyFireOnce('bar');

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('foo');

    expect(() => {
      once(null)();
    }).toThrow(new TypeError('Expected a function for first argument'));
  });
});
