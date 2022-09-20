const words = require('./words');

describe('String/words', () => {
  it('should count words in a subject string', () => {
    expect(words('')).toEqual([]);

    expect(words('  ')).toEqual([]);

    expect(words('Hello !@# world! \n This is a ^&* message \r from %#$% \v outter() \t space. 😀'))
      .toEqual(['Hello', 'world', 'This', 'is', 'a', 'message', 'from', 'outter', 'space', '😀']);

    expect(words('!@# \n Αυτό είναι ένα ^&* μήνυμα \r από %#$% \v το () μακρυνό \t διάστημα. 😀'))
      .toEqual(['Αυτό', 'είναι', 'ένα', 'μήνυμα', 'από', 'το', 'μακρυνό', 'διάστημα', '😀']);

    expect(words('!@# @#$# $^&^*\v(&*)( *_)__(*%^&%$ %@#$@^&*(_+$%@ #$!@! \t #!$$%$^ \r%*^(&* )'))
      .toEqual([]);

    expect(words('🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🥭'))
      .toEqual(['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭']);

    expect(words('1\t2\r3 4 5')).toEqual(['1', '2', '3', '4', '5']);

    expect(() => {
      return words(null);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
