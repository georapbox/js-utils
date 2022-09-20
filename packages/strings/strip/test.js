const strip = require('./strip');

describe('String/strip', () => {
  it('should strip a string from all occurrences of a given substring', () => {
    const str = 'Lorem_ipsum_dolor_sit_amet. Lorem+ipsum+dolor+sit+amet. 123456789';

    expect(strip(str, '_'))
      .toEqual('Loremipsumdolorsitamet. Lorem+ipsum+dolor+sit+amet. 123456789');

    expect(strip(str, '+'))
      .toEqual('Lorem_ipsum_dolor_sit_amet. Loremipsumdolorsitamet. 123456789');

    expect(strip(str, '123'))
      .toEqual('Lorem_ipsum_dolor_sit_amet. Lorem+ipsum+dolor+sit+amet. 456789');

    expect(strip(str, 'Lorem'))
      .toEqual('_ipsum_dolor_sit_amet. +ipsum+dolor+sit+amet. 123456789');

    expect(() => {
      return strip(['lorem_ipsum'], '_');
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
