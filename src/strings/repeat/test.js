var repeat = require('./repeat');

describe('String/repeat', function () {
  it('should repeat a string n times', function () {
    expect(repeat('a', 3)).toBe('aaa');

    expect(repeat('a', 3.8)).toBe('aaa');

    expect(repeat('a', 0)).toBe('');

    expect(repeat('a')).toBe('');

    expect(repeat('a', null)).toBe('');

    expect(repeat('a', NaN)).toBe('');

    expect(function () {
      return repeat('a', Infinity);
    }).toThrow();

    expect(function () {
      return repeat('a', -Infinity);
    }).toThrow();

    expect(function () {
      return repeat('a', -2);
    }).toThrow();

    expect(function () {
      return repeat('a', 1/0);
    }).toThrow();
  });
});
