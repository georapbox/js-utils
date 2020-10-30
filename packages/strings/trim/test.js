var trim = require('./trim');

describe('String/trim', function () {
  function runTests() {
    expect(trim('    Hello   ').length).toEqual(5);

    expect(function () {
      return trim(null);
    }).toThrow();

    expect(function () {
      return trim(123);
    }).toThrow();

    expect(function () {
      return trim({});
    }).toThrow();

    expect(function () {
      return trim([]);
    }).toThrow();

    expect(function () {
      return trim(void 0);
    }).toThrow();
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
