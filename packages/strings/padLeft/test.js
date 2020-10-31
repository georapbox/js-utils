var padLeft = require('./padLeft');

describe('String/padLeft', function () {
  it('pads a string on the left side to the given length', function () {
    expect(padLeft('Hello', 10, ' ')).toBe('     Hello');

    expect(padLeft('Hello', 10)).toBe('     Hello');

    expect(padLeft('Hello', 10, '-')).toBe('-----Hello');

    expect(padLeft('Hello', 3, '-')).toBe('Hello');

    expect(function () {
      return padLeft(123456, 3);
    }).toThrow('Expected a string for first argument');

    expect(function () {
      return padLeft('Hello', '10');
    }).toThrow('Expected a number for second argument');
  });
});
