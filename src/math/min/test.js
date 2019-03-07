/* global min */

describe('Math/min', function () {
  it('finds the smallest of zero or more numbers', function () {
    expect(min(5)).toEqual(5);

    expect(min([1, -10, 1024, 1024.5, 29])).toEqual(-10);

    expect(min(5, 10, 154, 4, 8, 87)).toEqual(4);

    expect(min(NaN, 10)).toEqual(NaN);

    expect(min('', '1')).toEqual(0);

    expect(min(0, true)).toEqual(0);

    expect(min(false)).toEqual(0);

    expect(min(true)).toEqual(1);

    expect(min()).toEqual(Infinity);
  });
});
