const isPrimitive = require('./isPrimitive');

describe('is/isPrimitive', () => {
  it('checks if value is a primitive data type', () => {
    expect(isPrimitive(null)).toBe(true);

    expect(isPrimitive(undefined)).toBe(true);

    expect(isPrimitive(123)).toBe(true);

    expect(isPrimitive(BigInt(0))).toBe(true);

    expect(isPrimitive(Infinity)).toBe(true);

    expect(isPrimitive(-Infinity)).toBe(true);

    expect(isPrimitive(NaN)).toBe(true);

    expect(isPrimitive('foo')).toBe(true);

    expect(isPrimitive(true)).toBe(true);

    expect(isPrimitive(false)).toBe(true);

    expect(isPrimitive(Symbol('foo'))).toBe(true);

    expect(isPrimitive({})).toBe(false);

    expect(isPrimitive([])).toBe(false);

    expect(isPrimitive(() => {})).toBe(false);

    expect(isPrimitive(new Map())).toBe(false);

    expect(isPrimitive(new WeakMap())).toBe(false);

    expect(isPrimitive(new Set())).toBe(false);

    expect(isPrimitive(new WeakSet())).toBe(false);

    expect(isPrimitive(new Date())).toBe(false);

    expect(isPrimitive(/s+/g)).toBe(false);
  });
});
