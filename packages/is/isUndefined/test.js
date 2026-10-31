const isUndefined = require('./isUndefined');

describe('is/isUndefined', () => {
  it('checks if a value is undefined', () => {
    expect(isUndefined()).toBe(true);

    expect(isUndefined(undefined)).toBe(true);

    expect(isUndefined(null)).toBe(false);

    expect(isUndefined(100)).toBe(false);
  });
});
