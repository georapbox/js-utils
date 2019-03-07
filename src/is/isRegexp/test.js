/* global isRegexp */

describe('is/isRegexp', function () {
  it('checks if a value is a regular expression', function () {
    expect(isRegexp(/^[0-9a-fA-F]+$/)).toBe(true);

    expect(isRegexp('/^[0-9a-fA-F]+$/')).toBe(false);

    expect(isRegexp()).toBe(false);
  });
});
