/* global randomRange */

describe('Math/randomRange', function () {
  it('returns a pseudo-random number between a min (inclusive) and a max (exclusive) value.', function () {
    var r0 = randomRange(0, 2);
    var r1 = randomRange(2, 0);

    expect(r0 >= 0 && r0 < 2).toBeTruthy();

    expect(r1 >= 0 && r1 < 2).toBeTruthy();

    expect(function () {
      return randomRange();
    }).toThrow();
  });
});
