const isTrue = require('./isTrue');

describe('is/isTrue', () => {
  it('checks if a valud is true', () => {
    expect(isTrue(true)).toBe(true);

    expect(isTrue(false)).toBe(false);

    expect(isTrue()).toBe(false);
  });
});
