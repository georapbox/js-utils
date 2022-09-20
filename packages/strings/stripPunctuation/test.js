const stripPunctuation = require('./stripPunctuation');

describe('String/stripPunctuation', () => {
  it('should remove all of punctuiation from given string', () => {
    const latinStr = ';``?You can\'t [make] an *ome*let + wit&&hout \\ %break_ing/% ~ a few eg-gs.!@#-"$"+:';
    const expectedLatinStr = 'You cant make an omelet without breaking a few eggs';

    const nonLatinStr = ';``?Δεν μπορείς να [φτιάξεις] μία *ομε*λέτα + χωρ&&ίς να \\ %σπάσ_εις/% ~ μερικά αυ-γά.!@#-"$"+:';
    const expectedNonLatinStr = 'Δεν μπορείς να φτιάξεις μία ομελέτα χωρίς να σπάσεις μερικά αυγά';

    expect(stripPunctuation(latinStr)).toBe(expectedLatinStr);

    expect(stripPunctuation(nonLatinStr)).toBe(expectedNonLatinStr);

    expect(() => {
      return stripPunctuation(null);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
