const max = require('./max');

describe('Math/max', function () {
  it('finds the largest of zero or more numbers', function () {
    expect(max(5)).toBe(5);

    expect(max([1, -10, 1024, 1024.5, 29])).toBe(1024.5);

    expect(max(5, 10, 154, 4, 8, 87)).toBe(154);

    expect(max(NaN, 10)).toBe(NaN);

    expect(max('', '1')).toBe(1);

    expect(max(0, true)).toBe(1);

    expect(max(false)).toBe(0);

    expect(max()).toBe(-Infinity);
  });
});
