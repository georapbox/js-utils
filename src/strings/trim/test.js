/* global trim */

describe('String/trim', function () {
  it('trim("     Hello    ") should have length 5', function () {
    expect(trim('    Hello   ').length).toEqual(5);
  });
});
