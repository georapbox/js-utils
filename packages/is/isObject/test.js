const isObject = require('./isObject');

describe('is/isObject', () => {
  it('checks if a value is object', () => {
    expect(isObject({})).toBe(true);

    expect(isObject(new Object())).toBe(true);

    expect(isObject(Object.create({}))).toBe(true);

    expect(isObject(Object.create(null))).toBe(true);

    expect(isObject(function test() {})).toBe(true);

    expect(isObject([1, 2, 3])).toBe(true);

    expect(isObject(new String('Hello world'))).toBe(true);

    expect(isObject('Hello world')).toBe(false);

    expect(isObject(new Number(0))).toBe(true);

    expect(isObject(0)).toBe(false);

    expect(isObject(new RegExp('s+'))).toBe(true);

    expect(isObject(/s+/)).toBe(true);

    expect(isObject(Symbol('foo'))).toBe(false);

    expect(isObject(new Map())).toBe(true);

    expect(isObject(new Set())).toBe(true);

    expect(isObject(true)).toBe(false);

    expect(isObject(Boolean(1))).toBe(false);

    expect(isObject(null)).toBe(false);
  });
});
