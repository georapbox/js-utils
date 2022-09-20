const isUndefined = require('./isUndefined');

describe('is/isUndefined', function () {
  let foo;

  it('checks if a value is undefined', function () {
    expect(isUndefined()).toBe(true);

    expect(isUndefined(foo)).toBe(true);

    expect(isUndefined(null)).toBe(false);

    expect(isUndefined(100)).toBe(false);
  });
});
