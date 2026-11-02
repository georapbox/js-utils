import { describe, expect, it } from 'vitest';
import { isString } from './isString.js';

describe('is/isString', () => {
  it('checks if a value is string', () => {
    expect(isString('404')).toBe(true);

    expect(isString(404)).toBe(false);

    expect(isString({})).toBe(false);

    expect(isString(['a', 'b'])).toBe(false);

    expect(isString(null)).toBe(false);

    expect(isString(String('lorem ipsum'))).toBe(true);
  });
});
