var contains = require('./contains');

describe('String/contains', function () {
  function runTests() {
    var str = 'To be, or not to be, that is the question.';

    expect(contains(str, 'To be')).toBe(true);

    expect(contains(str, 'question')).toBe(true);

    expect(contains(str, 'nonexistent')).toBe(false);

    expect(contains(str, 'To be', 1)).toBe(false);

    expect(contains(str, 'TO BE')).toBe(false);

    expect(contains(str, void 0)).toBe(false);

    expect(contains(str, null)).toBe(false);

    expect(contains('Hello', 'Hello', 1)).toBe(false);

    expect(contains('Hello', 'ello', 1)).toBe(true);

    expect(function () {
      return contains(123456, '123');
    }).toThrow(new TypeError('Expected a string for first argument'));
  }

  it('String should contain the specified search string (String.prototype.includes is supported)', function () {
    runTests();
  });

  it('String should contain the specified search string (String.prototype.includes is not supported)', function () {
    var nativeCode = String.prototype.includes;
    String.prototype.includes = null;
    runTests();
    String.prototype.includes = nativeCode;
  });
});
