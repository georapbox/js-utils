var roundToNearest = require('./roundToNearest');

describe('Math/roundToNearest', function () {
  it('rounds a number to the nearest multiple of a value provided', function () {
    expect(roundToNearest(100, 40)).toEqual(120);

    expect(roundToNearest(140, 40)).toEqual(160);

    expect(roundToNearest(180, 40)).toEqual(200);

    expect(roundToNearest(100, 0)).toEqual(100);

    expect(function () {
      return roundToNearest('100', '40');
    }).toThrow();
  });
});
