const isWeakSet = require('./isWeakSet');

describe('is/isWeakSet', function () {
  it('checks if a value is WeakMap', function () {
    expect(isWeakSet(new WeakSet())).toBe(true);

    expect(isWeakSet([])).toBe(false);

    expect(isWeakSet({})).toBe(false);

    expect(isWeakSet(void 0)).toBe(false);

    expect(isWeakSet(null)).toBe(false);

    expect(isWeakSet('foo')).toBe(false);
  });
});
