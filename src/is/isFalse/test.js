/* global isFalse */

describe('is/isFalse', function () {
  it('checks if a value is false', function () {
    expect(isFalse(false)).toBe(true);

    expect(isFalse(true)).toBe(false);

    expect(isFalse()).toBe(false);
  });
});
