const isEven = require('./isEven');

describe('is/isEven', function () {
  it('checks if value is even', function () {
    expect(isEven(2)).toBe(true);

    expect(isEven(0)).toBe(true);

    expect(isEven(3)).toBe(false);

    expect(isEven(null)).toBe(false);

    expect(isEven({})).toBe(false);

    expect(isEven([])).toBe(false);

    expect(isEven(NaN)).toBe(false);

    expect(isEven(void 0)).toBe(false);
  });
});
