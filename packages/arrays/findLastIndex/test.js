var findLastIndex = require('./findLastIndex');

describe('Array/findLastIndex', function () {
  var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'E'];
  var numbers = [1, 2, 3, 4];

  it('returns the last index in the array', function () {
    expect(findLastIndex(letters, function (chr) {
      return chr === 'E';
    })).toBe(7);

    expect(findLastIndex(numbers, function (chr) {
      return chr > 10;
    })).toBe(-1);

    expect(function () {
      return findLastIndex({}, function (chr) {
        return chr > 10;
      });
    }).toThrow();

    expect(function () {
      return findLastIndex(letters);
    }).toThrow();
  });
});
