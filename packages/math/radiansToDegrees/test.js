const radiansToDegrees = require('./radiansToDegrees');

describe('Math/radiansToDegrees', () => {
  it('converts radians to degrees', () => {
    expect(radiansToDegrees(0)).toBe(0);

    expect(radiansToDegrees(Math.PI / 2)).toBe(90);

    expect(radiansToDegrees(Math.PI)).toBe(180);

    expect(radiansToDegrees(3 * Math.PI / 2)).toBe(270);

    expect(radiansToDegrees(2 * Math.PI)).toBe(360);

    expect(radiansToDegrees(NaN)).toBe(NaN);

    expect(() => {
      return radiansToDegrees('3.14');
    }).toThrow(new TypeError('Expected a number for first argument'));
  });
});
