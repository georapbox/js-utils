const isSymbol = require('./isSymbol');

describe('is/isSymbol', () => {
  it('checks if a value is classified as a Symbol primitive', () => {
    expect(isSymbol(Symbol())).toBe(true);

    expect(isSymbol(Symbol('foo'))).toBe(true);

    expect(isSymbol(Symbol.for('foo'))).toBe(true);

    expect(isSymbol(Symbol.iterator)).toBe(true);

    expect(isSymbol('foo')).toBe(false);

    expect(isSymbol(123)).toBe(false);

    expect(isSymbol(NaN)).toBe(false);

    expect(isSymbol(true)).toBe(false);

    expect(isSymbol(null)).toBe(false);

    expect(isSymbol(undefined)).toBe(false);

    expect(isSymbol({})).toBe(false);

    expect(isSymbol([])).toBe(false);

    expect(isSymbol(new Set())).toBe(false);

    expect(isSymbol(new WeakSet())).toBe(false);

    expect(isSymbol(new Map())).toBe(false);

    expect(isSymbol(new WeakMap())).toBe(false);

    expect(isSymbol(new Date())).toBe(false);
  });
});
