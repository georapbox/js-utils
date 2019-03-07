/* global randomInt */

describe('Math/randomInt', function () {
  it('returns a pseudo-random integer number between a min (inclusive) and a max (inclusive) value.', function () {
    var r0 = randomInt(0, 2);
    var r1 = randomInt(2, 0);

    expect(r0 >= 0 && r0 <= 2).toBeTruthy();

    expect(r1 >= 0 && r1 <= 2).toBeTruthy();

    expect(function () {
      return randomInt();
    }).toThrow();
  });
});
