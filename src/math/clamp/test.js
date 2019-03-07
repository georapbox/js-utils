/* global clamp */

describe('Math/clamp', function () {
  it('clamps number within the inclusive lower and upper bounds', function () {
    expect(clamp(10, -5, 5)).toEqual(5);

    expect(clamp(-10, -5, 5)).toEqual(-5);

    expect(clamp(-15, 0, 100)).toEqual(0);

    expect(clamp(120, 0, 100)).toEqual(100);

    expect(clamp(10, NaN, NaN)).toEqual(NaN);

    expect(clamp(120, 100, 0)).toEqual(100);

    expect(function () {
      return clamp(10, '-5', '5');
    }).toThrow();
  });
});
