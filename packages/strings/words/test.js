var words = require('./words');

describe('String/words', function () {
  it('should count words in a subject string', function () {
    expect(function () {
      return words({});
    }).toThrow();

    expect(words('')).toHaveLength(0);

    expect(words('  ')).toHaveLength(0);

    expect(words('Hello world! \n A is a message \r from \v outter \t space. 😀')).toHaveLength(10);
  });
});
