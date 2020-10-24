var isTrue = require('./isTrue');

describe('is/isTrue', function () {
  it('checks if a valud is true', function () {
    expect(isTrue(true)).toBe(true);

    expect(isTrue(false)).toBe(false);

    expect(isTrue()).toBe(false);
  });
});
