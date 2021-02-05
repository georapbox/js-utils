var repeat = require('./repeat');

describe('String/repeat', function () {
  it('should repeat a string n times', function () {
    expect(repeat('a', 3)).toBe('aaa');

    expect(repeat('a', 3.8)).toBe('aaa');

    expect(repeat('', 3)).toBe('');

    expect(function () {
      return repeat('a');
    }).toThrow(new TypeError('Expected a number for second argument'));

    expect(function () {
      return repeat('a', 0);
    }).toThrow(new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for second argument'));

    expect(function () {
      return repeat('a', NaN);
    }).toThrow(new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for second argument'));

    expect(function () {
      return repeat('a', Infinity);
    }).toThrow(new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for second argument'));

    expect(function () {
      return repeat('a', -2);
    }).toThrow(new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for second argument'));

    expect(function () {
      return repeat('a', 1 / 0);
    }).toThrow(new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for second argument'));

    expect(function () {
      return repeat(null, 0);
    }).toThrow(new TypeError('Expected a string for first argument'));

    expect(function () {
      return repeat('a', '3');
    }).toThrow(new TypeError('Expected a number for second argument'));
  });
});
