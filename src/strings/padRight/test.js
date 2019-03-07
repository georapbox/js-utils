/* global padRight */

describe('String/padRight', function () {
  it('pads a string on the right side to the given length', function () {
    expect(padRight('Hello', 10, ' ')).toBe('Hello     ');

    expect(padRight('Hello', 10, '-')).toBe('Hello-----');
  });
});
