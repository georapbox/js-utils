describe('is/isNumber', function () {
  it('checks if a valud is number', function () {
    expect(isNumber(404)).toBe(true);

    expect(isNumber(new Date().getTime())).toBe(true);

    expect(isNumber(NaN)).toBe(true);

    expect(isNumber('302')).toBe(false);
  });
});
