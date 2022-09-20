const deburr = require('./deburr');

describe('String/deburr', () => {
  it('deburrs a string by converting latin-1 supplementary letters to basic latin letters and removing combining diacritical marks', () => {
    const str = 'Maître Corbeau, sur un arbre perché,'
      + 'Tenait en son bec un fromage.'
      + 'Maître Renard, par l’odeur alléché,'
      + 'Lui tint à peu près ce langage.';

    expect(deburr(str))
      .toEqual('Maitre Corbeau, sur un arbre perche,Tenait en son bec un fromage.Maitre Renard, par l’odeur alleche,Lui tint a peu pres ce langage.');

    expect(() => {
      return deburr();
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
