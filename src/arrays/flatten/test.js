/* global flatten */

describe('Array/flatten', function () {
  it('flattens an array a single level deep', function () {
    expect(flatten([1, [2, [3, [4]], 5], [10]])).toEqual([1, 2, [3, [4]], 5, 10]);

    expect(flatten([[1, 2], [3, 4], [5], 6])).toEqual([1, 2, 3, 4, 5, 6]);

    function dummy() {
      var arr = [1, [2, [3, [4]], 5]];
      arr.push(arguments);
      arr.push({foo: 'bar', length: 23});
      return arr;
    }

    expect(flatten(dummy('a', 'b')))
    .toEqual([1, 2, [3, [4]], 5, 'a', 'b', {foo: 'bar', length: 23}]);
  });
});
