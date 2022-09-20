const lerp = require('./lerp');

describe('Math/lerp', function () {
  it('converts a normalized value to the value that the normalized value points to', function () {
    expect(lerp(0.75, 0, 365)).toBe(273.75);

    expect(lerp(0.33, 100, 500)).toBe(232);

    expect(lerp(0, 100, 500)).toBe(100);

    expect(lerp(1, 100, 500)).toBe(500);

    expect(lerp(-0.5, 0, 500)).toBe(-250);

    expect(function () {
      return lerp(null, 0, 365);
    }).toThrow(new TypeError('Expected all arguments to be numbers'));

    expect(function () {
      return lerp(0.75, null, 365);
    }).toThrow(new TypeError('Expected all arguments to be numbers'));

    expect(function () {
      return lerp(0.75, 0, null);
    }).toThrow(new TypeError('Expected all arguments to be numbers'));
  });
});
