const isPlainObject = require('./isPlainObject');

describe('is/isPlainObject', () => {
  function Foo() {
    this.foo = 'bar';
  }

  it('checks if a valud is plain object', () => {
    expect(isPlainObject({ foo: 'bar' })).toBe(true);

    expect(isPlainObject(Object.create({}))).toBe(false);

    expect(isPlainObject(Object.create(null))).toBe(true);

    expect(isPlainObject(Object.create({ foo: 'bar' }))).toBe(false);

    expect(isPlainObject(new Foo())).toBe(false);

    expect(isPlainObject([1, 2, 3])).toBe(false);

    expect(isPlainObject(null)).toBe(false);

    expect(isPlainObject()).toBe(false);

    expect(isPlainObject(new Object({ foo: 'bar' }))).toBe(true);

    expect(isPlainObject(100)).toBe(false);

    expect(isPlainObject('lorem ipsum')).toBe(false);

    expect(isPlainObject(new Map())).toBe(false);

    expect(isPlainObject(new WeakMap())).toBe(false);

    expect(isPlainObject(new Set())).toBe(false);

    expect(isPlainObject(new WeakSet())).toBe(false);

    expect(isPlainObject(Symbol('foo'))).toBe(false);

    expect(isPlainObject(Symbol({}))).toBe(false);

    expect(isPlainObject(Symbol(new Object({ foo: 'bar' })))).toBe(false);

    expect(isPlainObject(Symbol(new Foo()))).toBe(false);
  });
});
