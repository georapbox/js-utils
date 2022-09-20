const isNull = require('./isNull');

describe('is/isNull', () => {
  it('checks if a valud is null', () => {
    expect(isNull(null)).toBe(true);

    expect(isNull(100)).toBe(false);

    expect(isNull()).toBe(false);
  });
});
