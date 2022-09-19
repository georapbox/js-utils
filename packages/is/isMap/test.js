const isMap = require('./isMap');

describe('is/isMap', function () {
  it('checks if a value is Map', function () {
    expect(isMap(new Map())).toBe(true);

    expect(isMap([])).toBe(false);

    expect(isMap({})).toBe(false);

    expect(isMap(void 0)).toBe(false);

    expect(isMap(null)).toBe(false);

    expect(isMap('foo')).toBe(false);
  });
});
