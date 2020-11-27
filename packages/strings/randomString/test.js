var randomString = require('./randomString');

describe('String/randomString', function () {
  it('generates a random string of n characters', function () {
    expect(randomString(16)).toHaveLength(16);

    expect(randomString(NaN)).toHaveLength(0);

    expect(function () {
      return randomString();
    }).toThrow('Expected a number for first argument');

    expect(function () {
      return randomString(10, 123);
    }).toThrow('Expected a string for second argument');
  });
});
