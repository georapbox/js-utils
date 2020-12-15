var roundToNearest = require('./roundToNearest');

describe('Math/roundToNearest', function () {
  it('rounds a number to the nearest multiple of a value provided', function () {
    expect(roundToNearest(100, 40)).toBe(120);

    expect(roundToNearest(140, 40)).toBe(160);

    expect(roundToNearest(180, 40)).toBe(200);

    expect(roundToNearest(100, 0)).toBe(100);

    expect(function () {
      return roundToNearest('100', '40');
    }).toThrow('Expected all arguments to be numbers');
  });
});
