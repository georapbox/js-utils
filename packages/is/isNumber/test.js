const isNumber = require('./isNumber');

describe('is/isNumber', () => {
  it('checks if a value is number', () => {
    expect(isNumber(404)).toBe(true);

    expect(isNumber(new Date().getTime())).toBe(true);

    expect(isNumber(NaN)).toBe(true);

    expect(isNumber('302')).toBe(false);

    expect(isNumber(null)).toBe(false);

    expect(isNumber(void 0)).toBe(false);

    expect(isNumber({})).toBe(false);

    expect(isNumber([])).toBe(false);

    expect(isNumber(Symbol(1))).toBe(false);
  });
});
