/* global roundToPlaces */

describe('Math/roundToPlaces', function () {
  it('rounds a number to a number of desired places', function () {
    var PI = Math.PI;

    expect(roundToPlaces(PI, 0)).toEqual(3);

    expect(roundToPlaces(PI, 1)).toEqual(3.1);

    expect(roundToPlaces(PI, 2)).toEqual(3.14);

    expect(roundToPlaces(PI, 3)).toEqual(3.142);

    expect(roundToPlaces(PI, 4)).toEqual(3.1416);

    expect(roundToPlaces(PI, 4.7)).toEqual(3.1416);

    expect(roundToPlaces(123456789, -1)).toEqual(123456790);

    expect(roundToPlaces(123456789, -2)).toEqual(123456800);

    expect(roundToPlaces(123456789, -3)).toEqual(123457000);

    expect(roundToPlaces(NaN, 2)).toEqual(NaN);

    expect(function () {
      return roundToPlaces('3.141592653589793', '2');
    }).toThrow();
  });
});
