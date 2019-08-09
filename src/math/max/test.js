describe('Math/max', function () {
  it('finds the largest of zero or more numbers', function () {
    expect(max(5)).toEqual(5);

    expect(max([1, -10, 1024, 1024.5, 29])).toEqual(1024.5);

    expect(max(5, 10, 154, 4, 8, 87)).toEqual(154);

    expect(max(NaN, 10)).toEqual(NaN);

    expect(max('', '1')).toEqual(1);

    expect(max(0, true)).toEqual(1);

    expect(max(false)).toEqual(0);

    expect(max()).toEqual(-Infinity);
  });
});
