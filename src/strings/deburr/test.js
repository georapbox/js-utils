var deburr = require('./deburr');

describe('String/deburr', function () {
  it('deburrs a string by converting latin-1 supplementary letters to basic latin letters and removing combining diacritical marks', function () {
    var str = 'Maître Corbeau, sur un arbre perché,' +
    'Tenait en son bec un fromage.' +
    'Maître Renard, par l’odeur alléché,' +
    'Lui tint à peu près ce langage.';

    expect(deburr(str))
    .toEqual('Maitre Corbeau, sur un arbre perche,Tenait en son bec un fromage.Maitre Renard, par l’odeur alleche,Lui tint a peu pres ce langage.');
  });
});
