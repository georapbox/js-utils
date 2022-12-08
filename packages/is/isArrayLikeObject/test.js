const isArrayLikeObject = require('./isArrayLikeObject');

describe('is/isArrayLikeObject', () => {
  const noop = () => void 0;
  const dummy = (...args) => args;

  it('check if value is array-like', () => {
    const args = dummy();

    expect(isArrayLikeObject(args)).toBe(true);

    expect(isArrayLikeObject([1, 2, 3])).toBe(true);

    expect(isArrayLikeObject('abc')).toBe(false);

    expect(isArrayLikeObject(0)).toBe(false);

    expect(isArrayLikeObject({ foo: 'bar' })).toBe(false);

    expect(isArrayLikeObject({ foo: 'bar', length: 10 })).toBe(true);

    expect(isArrayLikeObject(noop)).toBe(false);

    expect(isArrayLikeObject(null)).toBe(false);

    expect(isArrayLikeObject()).toBe(false);
  });
});
