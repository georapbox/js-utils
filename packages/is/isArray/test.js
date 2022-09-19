const isArray = require('./isArray');

describe('is/isArray', function () {
  function runTests() {
    expect(isArray(['a', 'b', 'c', 'd'])).toBe(true);

    expect(isArray({ a: 'a', b: 'b' })).toBe(false);

    expect(isArray('abcdefg')).toBe(false);

    expect(isArray(null)).toBe(false);

    expect(isArray(undefined)).toBe(false);
  }

  it('checks if value is array (Array.isArray is supported)', function () {
    runTests();
  });

  it('checks if value is array (Array.isArray is not supported)', function () {
    const nativeCode = Array.isArray;
    Array.isArray = null;
    runTests();
    Array.isArray = nativeCode;
  });
});
