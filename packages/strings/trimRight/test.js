var trimRight = require('./trimRight');

describe('String/trimRight', function () {
  function runTests() {
    expect(trimRight('Hello  ')).toBe('Hello');

    expect(trimRight('Hello\t  ')).toBe('Hello');

    expect(trimRight('Hello\n  ')).toBe('Hello');

    expect(trimRight('Hello\v  ')).toBe('Hello');

    expect(trimRight('Hello\r  ')).toBe('Hello');

    expect(trimRight('Hello\t\n\v\r  ')).toBe('Hello');

    expect(trimRight('\t\n\v\r  Hello  \t\n\v\r')).toBe('\t\n\v\r  Hello');

    expect(function () {
      return trimRight(null);
    }).toThrow(new TypeError('Expected a string for first argument'));

    expect(function () {
      return trimRight(123);
    }).toThrow(new TypeError('Expected a string for first argument'));
  }

  it('trims string from right end (String.prototype.trimEnd is supported)', function () {
    runTests();
  });

  it('trims string from right end (String.prototype.trimEnd is not supported)', function () {
    var nativeCode = String.prototype.trimEnd;
    String.prototype.trimEnd = null;
    runTests();
    String.prototype.trimEnd = nativeCode;
  });
});
