const roundToPlaces = require('./roundToPlaces');

describe('Math/roundToPlaces', () => {
  it('rounds a number to a number of desired places', () => {
    const PI = Math.PI;

    expect(roundToPlaces(PI, 0)).toBe(3);

    expect(roundToPlaces(PI, 1)).toBe(3.1);

    expect(roundToPlaces(PI, 2)).toBe(3.14);

    expect(roundToPlaces(PI, 3)).toBe(3.142);

    expect(roundToPlaces(PI, 4)).toBe(3.1416);

    expect(roundToPlaces(PI, 4.7)).toBe(3.1416);

    expect(roundToPlaces(123456789, -1)).toBe(123456790);

    expect(roundToPlaces(123456789, -2)).toBe(123456800);

    expect(roundToPlaces(123456789, -3)).toBe(123457000);

    expect(roundToPlaces(NaN, 2)).toBe(NaN);

    expect(() => {
      return roundToPlaces('3.141592653589793', '2');
    }).toThrow(new TypeError('Expected all arguments to be numbers'));
  });
});
