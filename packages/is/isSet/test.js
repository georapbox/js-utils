var isSet = require('./isSet');

describe('is/isSet', function () {
  it('checks if a value is WeakMap', function () {
    expect(isSet(new Set())).toBe(true);

    expect(isSet([])).toBe(false);

    expect(isSet({})).toBe(false);

    expect(isSet(void 0)).toBe(false);

    expect(isSet(null)).toBe(false);

    expect(isSet('foo')).toBe(false);
  });
});
