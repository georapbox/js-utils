const randomRange = require('./randomRange');

describe('Math/randomRange', function () {
  it('returns a pseudo-random number between a min (inclusive) and a max (exclusive) value.', function () {
    const r0 = randomRange(0, 2);
    const r1 = randomRange(2, 0);

    expect(r0 >= 0 && r0 < 2).toBe(true);

    expect(r1 >= 0 && r1 < 2).toBe(true);

    expect(function () {
      return randomRange();
    }).toThrow(new TypeError('Expected all arguments to be numbers'));
  });
});
