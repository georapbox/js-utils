var substringAfter = require('./substringAfter');

describe('String/substringAfter', function () {
  it('returns a substring after a specific sequence of character(s)', function () {
    var str = 'LOREM_IPSUM DOLOR_SIT AMET';

    expect(substringAfter(str, 'SIT ')).toBe('AMET');

    expect(substringAfter(str, 'sit ')).toBe(''); // test case sensitive

    expect(substringAfter(str, '_')).toBe('IPSUM DOLOR_SIT AMET');

    expect(substringAfter(str, '_', true)).toBe('SIT AMET');

    expect(substringAfter(str, '???')).toBe(''); // test non-existent sub-string

    expect(substringAfter('🍎🍐🍊🍌🍉🍇🍓', '🍊')).toBe('🍌🍉🍇🍓');

    expect(substringAfter('🍎🍐🍊🍌🍉🍇🍓', '🍓')).toBe('');

    expect(function () {
      return substringAfter(null, 'hello');
    }).toThrow(new TypeError('Expected a string for first and second argument'));

    expect(function () {
      return substringAfter(str, null);
    }).toThrow(new TypeError('Expected a string for first and second argument'));
  });
});
