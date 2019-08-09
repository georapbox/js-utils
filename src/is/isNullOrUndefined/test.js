describe('is/isNullOrUndefined', function () {
  var foo;

  it('checks if a value is null or undefined', function () {
    expect(isNullOrUndefined()).toBe(true);

    expect(isNullOrUndefined(foo)).toBe(true);

    expect(isNullOrUndefined(null)).toBe(true);

    expect(isNullOrUndefined({foo: 'bar'})).toBe(false);
  });
});
