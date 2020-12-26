var randomDist = require('./randomDist');

describe('Math/randomDist', function () {
  it('should return a weighted random number that tends to center', function () {
    var r0 = randomDist(0, 100, Infinity);
    expect(r0 >= 0 && r0 <= 100).toBe(true);

    // Test that min and max can be inverted.
    var r1 = randomDist(100, 0, 100);
    expect(r1 >= 0 && r1 <= 100).toBe(true);

    expect(function () {
      return randomDist('0', 100, 10);
    }).toThrow('Expected all arguments to be numbers');

    expect(function () {
      return randomDist(0, '100', 10);
    }).toThrow('Expected all arguments to be numbers');

    expect(function () {
      return randomDist(0, 100, '10');
    }).toThrow('Expected all arguments to be numbers');

    expect(function () {
      return randomDist(0, 100, 0);
    }).toThrow('Expected a positive number as third argument');

    expect(function () {
      return randomDist(0, 100, -100);
    }).toThrow('Expected a positive number as third argument');
  });
});
