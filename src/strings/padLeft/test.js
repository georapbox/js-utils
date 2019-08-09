describe('String/padLeft', function () {
  it('pads a string on the left side to the given length', function () {
    expect(padLeft('Hello', 10, ' ')).toBe('     Hello');

    expect(padLeft('Hello', 10, '-')).toBe('-----Hello');
  });
});
