const findIndex = require('./findIndex');

describe('Array/findIndex', function () {
  function runTests() {
    const arr = ['a', 'b', 'c', 'd', 'e'];

    expect(findIndex(arr, function (chr) {
      return chr === 'b';
    })).toBe(1);

    expect(findIndex(arr, function (chr) {
      return chr === 'Hello';
    })).toBe(-1);

    expect(function () {
      return findIndex({}, function (chr) {
        return chr === 'b';
      });
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(function () {
      return findIndex(arr);
    }).toThrow(new TypeError('Expected a function for second argument'));
  }

  it('returns the index in the array ((Array.prototype.findIndex is supported))', function () {
    runTests();
  });

  it('returns the index in the array ((Array.prototype.findIndex is not supported))', function () {
    const nativeCode = Array.prototype.findIndex;
    Array.prototype.findIndex = null;
    runTests();
    Array.prototype.findIndex = nativeCode;
  });
});
