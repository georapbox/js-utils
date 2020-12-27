var endsWith = require('./endsWith');

describe('String/endsWith', function () {
  function runTests() {
    expect(endsWith('To be, or not to be, that is the question.', 'question.')).toBe(true);

    expect(endsWith('To be, or not to be, that is the question.', 'question')).toBe(false);

    expect(endsWith('To be, or not to be, that is the question.', 'to be', 19)).toBe(true);

    expect(endsWith('Hello world')).toBe(false);

    expect(endsWith('Hello world', null)).toBe(false);

    expect(function () {
      return endsWith(123455, '123');
    }).toThrow(new TypeError('Expected a string for first argument'));
  }

  it('String should end with specified search string (using native String.prototype.endsWith)', function () {
    runTests();
  });

  it('String should end with specified search string (using native String.prototype.endsWith)', function () {
    var nativeCode = String.prototype.endsWith;
    String.prototype.endsWith = null;
    runTests();
    String.prototype.endsWith = nativeCode;
  });
});
