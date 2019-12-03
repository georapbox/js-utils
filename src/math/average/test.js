describe('Math/average', function () {
  it('calculates the average of a set of numbers', function () {
    expect(average(5, 10, 50, -45, 6, 7)).toBe(5.5);
    expect(average([5, 10, 50, -45, 6, 7])).toBe(5.5);

    expect(average(2, 4, 0, -0)).toBe(1.5);
    expect(average([2, 4, 0, -0])).toBe(1.5);

    expect(average(7)).toBe(7);
    expect(average([7])).toBe(7);

    expect(average(0, -0)).toBe(0);
    expect(average([0, -0])).toBe(0);

    expect(average()).toBe(0);
    expect(average([])).toBe(0);

    expect(average(Infinity, -Infinity, 0, -0, null, NaN, undefined, false, true, 'foo')).toBe(0);
    expect(average([Infinity, -Infinity, 0, -0, null, NaN, undefined, false, true, 'foo'])).toBe(0);

    expect(average(5, 4, null, true, '12', Infinity)).toBe(4.5);
    expect(average([5, 4, null, true, '12', Infinity])).toBe(4.5);

    expect(average([], {})).toBe(0);
    expect(average([[], {}])).toBe(0);

    expect(average('4', '2')).toBe(0);
    expect(average(['4', '2'])).toBe(0);
  });
});
