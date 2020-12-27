var trim = require('./trim');

describe('String/trim', function () {
  function runTests() {
    expect(trim('    Hello   ')).toBe('Hello');

    expect(trim('\t  Hello  \t')).toBe('Hello');

    expect(trim('\n  Hello  \n')).toBe('Hello');

    expect(trim('\v  Hello  \v')).toBe('Hello');

    expect(trim('\r  Hello  \r')).toBe('Hello');

    expect(trim('\t\n\v\r  Hello  \t\n\v\r')).toBe('Hello');

    expect(function () {
      return trim(null);
    }).toThrow(new TypeError('Expected a string for first argument'));

    expect(function () {
      return trim(123);
    }).toThrow(new TypeError('Expected a string for first argument'));
  }

  it('trims string both ends (String.prototype.trim is uspported)', function () {
    runTests();
  });

  it('trims string both ends (String.prototype.trim is not uspported)', function () {
    var nativeCode = String.prototype.trim;
    String.prototype.trim = null;
    runTests();
    String.prototype.trim = nativeCode;
  });
});
