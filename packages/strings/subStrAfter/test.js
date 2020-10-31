var subStrAfter = require('./subStrAfter');

describe('String/subStrAfter', function () {
  it('returns a substring after a specific sequence of character(s)', function () {
    expect(subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', 'SIT ')).toBe('AMET');

    expect(subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', '_', true)).toBe('SIT AMET');

    expect(function () {
      return subStrAfter(null, 'hello');
    }).toThrow();

    expect(function () {
      return subStrAfter('hello', null);
    }).toThrow();
  });
});