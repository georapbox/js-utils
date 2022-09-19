const clamp = require('./clamp');

describe('Math/clamp', function () {
  it('clamps number within the inclusive lower and upper bounds', function () {
    expect(clamp(5, 0, 10)).toBe(5);

    expect(clamp(10, -5, 5)).toBe(5);

    expect(clamp(-10, -5, 5)).toBe(-5);

    expect(clamp(-15, 0, 100)).toBe(0);

    expect(clamp(120, 0, 100)).toBe(100);

    expect(clamp(-5, NaN, NaN)).toBe(0);

    expect(clamp(-5, NaN, 5)).toBe(0);

    expect(clamp(-5, 0, NaN)).toBe(0);

    expect(clamp(120, 100, 0)).toBe(100);

    expect(function () {
      return clamp(10, '-5', '5');
    }).toThrow(new TypeError('Expected all arguments to be numbers'));
  });
});
