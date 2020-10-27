var isNaN = require('./isNaN');

describe('is/isNaN', function () {
  function runTests() {
    expect(isNaN(NaN)).toBe(true);

    expect(isNaN(10)).toBe(false);

    expect(isNaN(undefined + 5)).toBe(true);

    expect(isNaN(Number.NaN)).toBe(true);

    expect(isNaN('NaN')).toBe(false);

    expect(isNaN(undefined)).toBe(false);

    expect(isNaN({})).toBe(false);

    expect(isNaN(true)).toBe(false);

    expect(isNaN(null)).toBe(false);
  }

  it('check if value is NaN (Number.isNaN is supported)', function () {
    runTests();
  });

  it('check if value is NaN (Number.isNaN is not supported)', function () {
    var nativeCode = Number.isNaN;
    Number.isNaN = null;
    runTests();
    Number.isNaN = nativeCode;
  });
});
