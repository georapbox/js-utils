var trimLeft = require('./trimLeft');

describe('String/trimLeft', function () {
  function runTests() {
    expect(trimLeft('  Hello')).toBe('Hello');

    expect(trimLeft('\t  Hello')).toBe('Hello');

    expect(trimLeft('\n  Hello')).toBe('Hello');

    expect(trimLeft('\v  Hello')).toBe('Hello');

    expect(trimLeft('\r  Hello')).toBe('Hello');

    expect(trimLeft('\t\n\v\r  Hello')).toBe('Hello');

    expect(trimLeft('\t\n\v\r  Hello  \t\n\v\r')).toBe('Hello  \t\n\v\r');

    expect(function () {
      return trimLeft(null);
    }).toThrow(new TypeError('Expected a string for first argument'));

    expect(function () {
      return trimLeft(123);
    }).toThrow(new TypeError('Expected a string for first argument'));
  }

  it('trims string from left end (String.prototype.trimStart is supported)', function () {
    runTests();
  });

  it('trims string from left end (String.prototype.trimStart is not supported)', function () {
    var nativeCode = String.prototype.trimStart;
    String.prototype.trimStart = null;
    runTests();
    String.prototype.trimStart = nativeCode;
  });
});
