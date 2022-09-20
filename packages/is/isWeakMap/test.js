const isWeakMap = require('./isWeakMap');

describe('is/isWeakMap', function () {
  it('checks if a value is WeakMap', function () {
    expect(isWeakMap(new WeakMap())).toBe(true);

    expect(isWeakMap([])).toBe(false);

    expect(isWeakMap({})).toBe(false);

    expect(isWeakMap(void 0)).toBe(false);

    expect(isWeakMap(null)).toBe(false);

    expect(isWeakMap('foo')).toBe(false);
  });
});
