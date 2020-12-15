var min = require('./min');

describe('Math/min', function () {
  it('finds the smallest of zero or more numbers', function () {
    expect(min(5)).toBe(5);

    expect(min([1, -10, 1024, 1024.5, 29])).toBe(-10);

    expect(min(5, 10, 154, 4, 8, 87)).toBe(4);

    expect(min(NaN, 10)).toBe(NaN);

    expect(min('', '1')).toBe(0);

    expect(min(0, true)).toBe(0);

    expect(min(false)).toBe(0);

    expect(min(true)).toBe(1);

    expect(min()).toBe(Infinity);
  });
});
