const isIterable = require('./isIterable');

describe('is/isIterable', () => {
  function* generatorFunc() {
    yield 'foo';
  }

  const noop = () => void 0;

  it('checks if a value is iterable)', () => {
    expect(isIterable([])).toBe(true);
    expect(isIterable(new Map())).toBe(true);
    expect(isIterable(new Set())).toBe(true);
    expect(isIterable('')).toBe(true);
    expect(isIterable(generatorFunc())).toBe(true);

    // non iterables
    expect(isIterable(noop)).toBe(false);
    expect(isIterable({})).toBe(false);
    expect(isIterable(null)).toBe(false);
    expect(isIterable(undefined)).toBe(false);
    expect(isIterable(0)).toBe(false);
    expect(isIterable(NaN)).toBe(false);
    expect(isIterable(Infinity)).toBe(false);
    expect(isIterable(true)).toBe(false);
    expect(isIterable(Symbol('foo'))).toBe(false);
  });

  it('should throw `TypeError` if `Symbol` is not supported', () => {
    const nativeCode = window.Symbol;

    window.Symbol = undefined; // emulate `Symbol` not being supported

    expect(() => {
      return isIterable([]);
    }).toThrow(new TypeError('Symbol or Symbol.iterator is not supported by your environment.'));

    window.Symbol = nativeCode;
  });

  it('should throw `TypeError` if `Symbol.iterator` is not supported', () => {
    const nativeCode = window.Symbol;

    window.Symbol = {}; // emulate `Symbol.iterator` not being supported

    expect(() => {
      return isIterable([]);
    }).toThrow(new TypeError('Symbol or Symbol.iterator is not supported by your environment.'));

    window.Symbol = nativeCode;
  });
});
