import { describe, expect, it } from 'vitest';
import { isArray } from './isArray.js';

describe('is/isArray', () => {
  it('checks if value is array', () => {
    expect(isArray(['a', 'b', 'c', 'd'])).toBe(true);

    expect(isArray({ a: 'a', b: 'b' })).toBe(false);

    expect(isArray('abcdefg')).toBe(false);

    expect(isArray(null)).toBe(false);

    expect(isArray(undefined)).toBe(false);
  });
});
