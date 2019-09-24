describe('is/isNumber', function () {
  it('checks if a value is number', function () {
    expect(isNumber(404)).toBe(true);

    expect(isNumber(new Date().getTime())).toBe(true);

    expect(isNumber(NaN)).toBe(true);

    expect(isNumber('302')).toBe(false);
  });
});
