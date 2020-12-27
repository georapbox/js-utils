var subStrBefore = require('./subStrBefore');

describe('String/subStrBefore', function () {
  it('should return a substring before a specific sequence of character(s)', function () {
    var str = 'LOREM_IPSUM DOLOR_SIT AMET';

    expect(subStrBefore(str, 'SIT')).toEqual('LOREM_IPSUM DOLOR_');

    expect(subStrBefore(str, '_', true)).toEqual('LOREM_IPSUM DOLOR');

    expect(subStrBefore(str, '')).toEqual(str);

    expect(subStrBefore(str, 'zzz')).toEqual(str);

    expect(subStrBefore(str, 'zzz', true)).toEqual(str);

    expect(function () {
      return subStrBefore(str);
    }).toThrow(new TypeError('Expected a string for first and second argument'));
  });
});
