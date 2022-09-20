const degreesToRadians = require('./degreesToRadians');

describe('Math/degreesToRadians', function () {
  it('converts degrees to radians', function () {
    expect(degreesToRadians(0)).toBe(0);

    expect(degreesToRadians(90)).toBe(Math.PI / 2);

    expect(degreesToRadians(180)).toBe(Math.PI);

    expect(degreesToRadians(270)).toBe(3 * Math.PI / 2);

    expect(degreesToRadians(360)).toBe(2 * Math.PI);

    expect(degreesToRadians(NaN)).toBe(NaN);

    expect(function () {
      return degreesToRadians('180');
    }).toThrow(new TypeError('Expected a number for first argument'));
  });
});
