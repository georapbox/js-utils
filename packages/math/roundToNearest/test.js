const roundToNearest = require('./roundToNearest');

describe('Math/roundToNearest', () => {
  it('rounds a number to the nearest multiple of a value provided', () => {
    expect(roundToNearest(100, 40)).toBe(120);

    expect(roundToNearest(140, 40)).toBe(160);

    expect(roundToNearest(180, 40)).toBe(200);

    expect(roundToNearest(100, 0)).toBe(NaN);

    expect(roundToNearest(100, NaN)).toBe(NaN);

    expect(roundToNearest(100, Infinity)).toBe(NaN);

    expect(() => {
      return roundToNearest('100', '40');
    }).toThrow(new TypeError('Expected all arguments to be numbers'));
  });
});
