const randomDist = require('./randomDist');

describe('Math/randomDist', function () {
  it('should return a weighted random number that tends to center', function () {
    const r0 = randomDist(0, 100, 100);
    expect(r0 >= 0 && r0 <= 100).toBe(true);

    // Test that min and max can be inverted.
    const r1 = randomDist(100, 0, 100);
    expect(r1 >= 0 && r1 <= 100).toBe(true);

    expect(function () {
      return randomDist('0', 100, 10);
    }).toThrow(new TypeError('Expected all arguments to be numbers'));

    expect(function () {
      return randomDist(0, '100', 10);
    }).toThrow(new TypeError('Expected all arguments to be numbers'));

    expect(function () {
      return randomDist(0, 100, '10');
    }).toThrow(new TypeError('Expected all arguments to be numbers'));

    expect(function () {
      return randomDist(0, 100, 0);
    }).toThrow(new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for third argument'));

    expect(function () {
      return randomDist(0, 100, -100);
    }).toThrow(new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for third argument'));

    expect(function () {
      return randomDist(0, 100, Infinity);
    }).toThrow(new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for third argument'));

    expect(function () {
      return randomDist(0, 100, NaN);
    }).toThrow(new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for third argument'));
  });
});
