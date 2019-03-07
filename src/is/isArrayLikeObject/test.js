/* global isArrayLikeObject */

describe('is/isArrayLikeObject', function () {
  function noop() {}

  function dummy() {
    return arguments;
  }

  it('check if value is array-like', function () {
    var args = dummy();

    expect(isArrayLikeObject(args)).toBe(true);

    expect(isArrayLikeObject([1, 2, 3])).toBe(true);

    expect(isArrayLikeObject('abc')).toBe(false);

    expect(isArrayLikeObject(0)).toBe(false);

    expect(isArrayLikeObject({foo: 'bar'})).toBe(false);

    expect(isArrayLikeObject({foo: 'bar', length: 10})).toBe(true);

    expect(isArrayLikeObject(noop)).toBe(false);

    expect(isArrayLikeObject(null)).toBe(false);

    expect(isArrayLikeObject()).toBe(false);
  });
});
