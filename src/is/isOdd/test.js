var isOdd = require('./isOdd');

describe('is/isOdd', function () {
  it('checks if a value is odd', function () {
    expect(isOdd(3)).toBe(true);

    expect(isOdd(0)).toBe(false);

    expect(isOdd(2)).toBe(false);
  });
});
