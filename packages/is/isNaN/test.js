const isNaN = require('./isNaN');

describe('is/isNaN', () => {
  const runTests = () => {
    expect(isNaN(NaN)).toBe(true);
    expect(isNaN(NaN)).toBe(true);
    expect(isNaN(Number.NaN)).toBe(true);
    expect(isNaN(0 / 0)).toBe(true);

    // e.g. these would have been true with global isNaN()
    expect(isNaN('NaN')).toBe(false);
    expect(isNaN(undefined)).toBe(false);
    expect(isNaN({})).toBe(false);
    expect(isNaN('blabla')).toBe(false);

    expect(isNaN(true)).toBe(false);
    expect(isNaN(null)).toBe(false);
    expect(isNaN(37)).toBe(false);
    expect(isNaN('37')).toBe(false);
    expect(isNaN('37.37')).toBe(false);
    expect(isNaN('')).toBe(false);
    expect(isNaN(' ')).toBe(false);
  };

  it('check if value is NaN (Number.isNaN is supported)', () => {
    runTests();
  });

  it('check if value is NaN (Number.isNaN is not supported)', () => {
    const nativeCode = Number.isNaN;
    Number.isNaN = null;
    runTests();
    Number.isNaN = nativeCode;
  });
});
