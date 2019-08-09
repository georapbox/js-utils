describe('is/isArray', function () {
  it('checks if value is array', function () {
    expect(isArray(['a', 'b', 'c', 'd'])).toBe(true);

    expect(isArray({a: 'a', b: 'b'})).toBe(false);

    expect(isArray('abcdefg')).toBe(false);

    expect(isArray(null)).toBe(false);

    expect(isArray(undefined)).toBe(false);
  });
});
