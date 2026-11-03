import { describe, expect, it } from 'vitest';
import { isDate } from './isDate.js';

describe('is/isDate', () => {
  it('checks if a value is Date object', () => {
    expect(isDate(new Date())).toBe(true);

    expect(isDate(new Date().getTime())).toBe(false);
  });
});
