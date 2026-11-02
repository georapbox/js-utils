import { expect, describe, it } from 'vitest';
import { isTrue } from './isTrue.js';

describe('is/isTrue', () => {
  it('checks if a valud is true', () => {
    expect(isTrue(true)).toBe(true);

    expect(isTrue(false)).toBe(false);

    expect(isTrue()).toBe(false);
  });
});
