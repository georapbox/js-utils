const squash = require('./squash');

describe('String/squash', () => {
  it('removes all spaces from a string', () => {
    expect(squash('Lorem ispum dolor sit amet')).toBe('Loremispumdolorsitamet');

    expect(squash('   Lorem   ispum   dolor sit amet  ')).toBe('Loremispumdolorsitamet');

    expect(squash('\tLorem \n\vispum \tdolor \fsit \n amet  ')).toBe('\tLorem\n\vispum\tdolor\fsit\namet');

    expect(squash('Loremispumdolorsitamet')).toBe('Loremispumdolorsitamet');
  });

  it('removes all spaces from a string including escape sequences', () => {
    const expected = 'Loremispumdolorsitamet';

    expect(squash('Lorem ispum dolor sit amet', true)).toBe(expected);

    expect(squash('   Lorem   ispum   dolor sit amet  ', true)).toBe(expected);

    expect(squash('\tLorem \n\vispum \tdolor \fsit \n amet  ', true)).toBe(expected);

    expect(squash('Loremispumdolorsitamet', true)).toBe(expected);

    expect(
      squash(
        `\tLorem \n ispum
        \tdolor sit \n amet  `,
        true
      )
    ).toBe(expected);
  });

  it('throws TypeError is first argument is not a string', () => {
    expect(() => {
      return squash(['a', 'b', 'c']);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
