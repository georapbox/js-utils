var stripPunctuation = require('./stripPunctuation');

describe('String/stripPunctuation', function () {
  it('should remove all of punctuiation from given string', function () {
    var latinStr = ';``?You can\'t [make] an *ome*let + wit&&hout \\ %break_ing/% ~ a few eg-gs.!@#-"$"+:';
    var expectedLatinStr = 'You cant make an omelet without breaking a few eggs';

    var nonLatinStr = ';``?Δεν μπορείς να [φτιάξεις] μία *ομε*λέτα + χωρ&&ίς να \\ %σπάσ_εις/% ~ μερικά αυ-γά.!@#-"$"+:';
    var expectedNonLatinStr = 'Δεν μπορείς να φτιάξεις μία ομελέτα χωρίς να σπάσεις μερικά αυγά';

    expect(stripPunctuation(latinStr)).toBe(expectedLatinStr);

    expect(stripPunctuation(nonLatinStr)).toBe(expectedNonLatinStr);

    expect(function () {
      return stripPunctuation(null);
    }).toThrow('Expected a string for first argument');
  });
});
