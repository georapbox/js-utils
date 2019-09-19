describe('is/isNullish', function () {
  var foo;

  it('checks if a value is null or undefined', function () {
    expect(isNullish()).toBe(true);

    expect(isNullish(foo)).toBe(true);

    expect(isNullish(null)).toBe(true);

    expect(isNullish({foo: 'bar'})).toBe(false);
  });
});
