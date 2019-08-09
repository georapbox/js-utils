describe('is/isFalsy', function () {
  it('checks if a value is falsy', function () {
    expect(isFalsy(true)).toBe(false);

    expect(isFalsy(' ')).toBe(false);

    expect(isFalsy({foo: 'bar'})).toBe(false);

    expect(isFalsy(false)).toBe(true);

    expect(isFalsy(NaN)).toBe(true);

    expect(isFalsy()).toBe(true);

    expect(isFalsy(0)).toBe(true);

    expect(isFalsy('')).toBe(true);
  });
});
