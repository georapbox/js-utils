const isObjectLike = require('./isObjectLike');

describe('is/isObjectLike', () => {
  it('checks if a value is object-like', () => {
    expect(isObjectLike({})).toBe(true);

    expect(isObjectLike(new Object())).toBe(true);

    expect(isObjectLike(Object.create({}))).toBe(true);

    expect(isObjectLike(Object.create(null))).toBe(true);

    expect(isObjectLike([1, 2, 3])).toBe(true);

    expect(isObjectLike(new String('Hello world'))).toBe(true);

    expect(isObjectLike(new Number(0))).toBe(true);

    expect(isObjectLike(new RegExp('s+'))).toBe(true);

    expect(isObjectLike(/s+/)).toBe(true);

    expect(isObjectLike(new Map())).toBe(true);

    expect(isObjectLike(new Set())).toBe(true);

    expect(isObjectLike('Hello world')).toBe(false);

    expect(isObjectLike(0)).toBe(false);

    expect(isObjectLike(function test() {})).toBe(false);

    expect(isObjectLike(Symbol('foo'))).toBe(false);

    expect(isObjectLike(true)).toBe(false);

    expect(isObjectLike(Boolean(1))).toBe(false);
  });
});
