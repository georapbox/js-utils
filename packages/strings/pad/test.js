var pad = require('./pad');

describe('String/pad', function () {
  it('pads a string on both sides to the given length', function () {
    expect(pad('Hello', 9, ' ')).toBe('  Hello  ');

    expect(pad('Hello', 9)).toBe('  Hello  ');

    expect(pad('Hello', 9, '-')).toBe('--Hello--');

    expect(pad('Hello', 3, '-')).toBe('Hello');

    expect(function () {
      return pad(123456, 3);
    }).toThrow('Expected a string for first argument');

    expect(function () {
      return pad('Hello', '9');
    }).toThrow('Expected a number for second argument');
  });
});
