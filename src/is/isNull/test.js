describe('is/isNull', function () {
  it('checks if a valud is null', function () {
    expect(isNull(null)).toBe(true);

    expect(isNull(100)).toBe(false);

    expect(isNull()).toBe(false);
  });
});
