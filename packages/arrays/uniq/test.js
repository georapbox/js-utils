const uniq = require('./uniq');

describe('Array/uniq', function () {
  const arr = ['a', 'a', 'b', true, '2', 2, false, true];

  it('removes duplicate primitive values from an array', function () {
    const result = uniq(arr);

    expect(result).toEqual(['a', 'b', true, '2', 2, false]);

    expect(function () {
      return uniq({});
    }).toThrow(new TypeError('Expected an array for first argument'));
  });
});
