var isTruthy = require('./isTruthy');

describe('is/isTruthy', function () {
  it('checks if a value is truthy', function () {
    expect(isTruthy(true)).toBe(true);

    expect(isTruthy(' ')).toBe(true);

    expect(isTruthy({ foo: 'bar' })).toBe(true);

    expect(isTruthy(false)).toBe(false);

    expect(isTruthy(NaN)).toBe(false);

    expect(isTruthy()).toBe(false);

    expect(isTruthy(0)).toBe(false);

    expect(isTruthy('')).toBe(false);
  });
});
