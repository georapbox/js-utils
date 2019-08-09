describe('String/trimLeft', function () {
  it('trimLeft("     Hey") should have length 3', function () {
    expect(trimLeft('    Hey').length).toEqual(3);
  });
});
