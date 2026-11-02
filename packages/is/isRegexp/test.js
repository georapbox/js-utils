import { expect, describe, it } from 'vitest';
import { isRegexp } from './isRegexp.js';

describe('is/isRegexp', () => {
  it('checks if a value is a regular expression', () => {
    expect(isRegexp(/^[0-9a-fA-F]+$/)).toBe(true);

    expect(isRegexp('/^[0-9a-fA-F]+$/')).toBe(false);

    expect(isRegexp()).toBe(false);
  });
});
