const isInteger = require('./isInteger');

describe('is/isInteger', () => {
  const runTests = () => {
    expect(isInteger(0.1)).toBe(false);

    expect(isInteger(1)).toBe(true);

    expect(isInteger(Math.PI)).toBe(false);

    expect(isInteger(-100000)).toBe(true);

    expect(isInteger(NaN)).toBe(false);

    expect(isInteger(0)).toBe(true);

    expect(isInteger('10')).toBe(false);

    expect(isInteger(Infinity)).toBe(false);

    expect(isInteger(9007199254740992)).toBe(true);

    expect(isInteger(-9007199254740992)).toBe(true);
  };

  it('checks if a value is integer (Number.isInteger is supported)', () => {
    runTests();
  });

  it('checks if a value is integer (Number.isInteger is not supported)', () => {
    const nativeCode = Number.isInteger;
    Number.isInteger = null;
    runTests();
    Number.isInteger = nativeCode;
  });
});
