const findLastIndex = require('./findLastIndex');

describe('Array/findLastIndex', function () {
  function runTests() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'E'];
    const numbers = [1, 2, 3, 4];

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
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(function () {
      return findLastIndex(letters);
    }).toThrow(new TypeError('Expected a function for second argument'));
  }

  it('returns the last index in the array (Array.prototype.findLastIndex is supported)', function () {
    runTests();
  });

  it('returns the last index in the array (Array.prototype.findLastIndex is not supported', function () {
    const nativeCode = Array.prototype.findLastIndex;
    Array.prototype.findLastIndex = null;
    runTests();
    Array.prototype.findLastIndex = nativeCode;
  })
});
