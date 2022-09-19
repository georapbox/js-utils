const isArrayLike = require('./isArrayLike');

describe('is/isArrayLike', function () {
  function noop() {}

  function dummy(...args) {
    return args;
  }

  it('check if value is array-like', function () {
    const args = dummy();

    expect(isArrayLike(args)).toBe(true);

    expect(isArrayLike([1, 2, 3])).toBe(true);

    expect(isArrayLike('abc')).toBe(true);

    expect(isArrayLike(0)).toBe(false);

    expect(isArrayLike({foo: 'bar'})).toBe(false);

    expect(isArrayLike({foo: 'bar', length: 10})).toBe(true);

    expect(isArrayLike(noop)).toBe(false);

    expect(isArrayLike(null)).toBe(false);

    expect(isArrayLike()).toBe(false);
  });
});
