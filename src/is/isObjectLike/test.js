describe('is/isObject', function () {
  it('checks if a value is object-like', function () {
    expect(isObjectLike({})).toBe(true);

    expect(isObjectLike(function noop() {})).toBe(false);

    expect(isObjectLike([1, 2, 3])).toBe(true);

    expect(isObjectLike(null)).toBe(false);
  });
});
