const isWeakMap = require('./isWeakMap');

describe('is/isWeakMap', () => {
  it('checks if a value is WeakMap', () => {
    expect(isWeakMap(new WeakMap())).toBe(true);

    expect(isWeakMap([])).toBe(false);

    expect(isWeakMap({})).toBe(false);

    expect(isWeakMap(void 0)).toBe(false);

    expect(isWeakMap(null)).toBe(false);

    expect(isWeakMap('foo')).toBe(false);
  });
});
