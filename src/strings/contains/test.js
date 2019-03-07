/*global contains*/

describe('String/contains', function () {
  it('String should contain the specified search string', function () {
    var str = 'To be, or not to be, that is the question.';

    expect(contains(str, 'To be')).toBe(true);

    expect(contains(str, 'question')).toBe(true);

    expect(contains(str, 'nonexistent')).toBe(false);

    expect(contains(str, 'To be', 1)).toBe(false);

    expect(contains(str, 'TO BE')).toBe(false);
  });
});
