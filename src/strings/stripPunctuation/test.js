var stripPunctuation = require('./stripPunctuation');

describe('String/stripPunctuation', function () {
  var str = ';``?You can\'t [make] an *ome*let + wit&&hout \\ %break_ing/% ~ a few eg-gs.!@#-"$"+:';
  it('should remove all of punctuiation from given string', function () {
    expect(stripPunctuation(str))
      .toEqual('You cant make an omelet without breaking a few eggs');

    expect(stripPunctuation(str).indexOf('%')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('[')).toEqual(-1);

    expect(stripPunctuation(str).indexOf(']')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('\'')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('+')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('-')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('*')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('.')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('~')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('!')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('#')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('$')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('@')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('&')).toEqual(-1);

    expect(stripPunctuation(str).indexOf(':')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('\\')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('/')).toEqual(-1);

    expect(stripPunctuation(str).indexOf(';')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('?')).toEqual(-1);

    expect(stripPunctuation(str).indexOf('"')).toEqual(-1);

    expect(function () {
      return stripPunctuation(void 0);
    }).toThrow();

    expect(function () {
      return stripPunctuation(null);
    }).toThrow();

    expect(function () {
      return stripPunctuation(123);
    }).toThrow();

    expect(function () {
      return stripPunctuation({});
    }).toThrow();

    expect(function () {
      return stripPunctuation([]);
    }).toThrow();

    expect(function () {
      return stripPunctuation(Symbol('foo'));
    }).toThrow();
  });
});
