const isEmpty = require('./isEmpty');

describe('is/isEmpty', () => {
  it('checks if a value is an empty object, collection, map, or set.', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);

    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ foo: 'bar' })).toBe(false);
    expect(isEmpty(Object.create(null))).toBe(true);
    expect(isEmpty(Object.create({}))).toBe(true);
    expect(isEmpty(Object.create({ foo: 'bar' }))).toBe(true);

    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Map().set('foo', 'bar'))).toBe(false);

    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty(new Set([1, 2, 3]))).toBe(false);

    expect(isEmpty(Symbol())).toBe(true);
    expect(isEmpty(Symbol('foo'))).toBe(true);

    expect(isEmpty('')).toBe(true);
    expect(isEmpty(String(''))).toBe(true);
    expect(isEmpty(new String(''))).toBe(true);
    expect(isEmpty('foo')).toBe(false);
    expect(isEmpty(String('foo'))).toBe(false);
    expect(isEmpty(new String('foo'))).toBe(false);

    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(Number(0))).toBe(true);
    expect(isEmpty(new Number(0))).toBe(true);
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(Number(1))).toBe(true);
    expect(isEmpty(new Number(1))).toBe(true);

    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(Boolean(true))).toBe(true);
    expect(isEmpty(new Boolean(true))).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(Boolean(false))).toBe(true);
    expect(isEmpty(new Boolean(false))).toBe(true);

    expect(isEmpty(() => {})).toBe(true);
    expect(isEmpty(() => 1)).toBe(true);
    expect(isEmpty(class MyClass {})).toBe(true);
    expect(isEmpty(class MyClass {
      constructor(a) {
        this.a = a;
      }
    })).toBe(true);

    expect(isEmpty(/s+/g)).toBe(true);
    expect(isEmpty(new RegExp('s+', 'g'))).toBe(true);

    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });
});
