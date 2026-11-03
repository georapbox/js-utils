import { describe, expect, it } from 'vitest';
import { isNullish } from './isNullish.js';

describe('is/isNullish', () => {
  it('checks if a value is null or undefined', () => {
    expect(isNullish()).toBe(true);

    expect(isNullish(undefined)).toBe(true);

    expect(isNullish(null)).toBe(true);

    expect(isNullish({ foo: 'bar' })).toBe(false);
  });
});
