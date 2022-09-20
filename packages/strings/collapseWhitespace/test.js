const collapseWhitespace = require('./collapseWhitespace');

describe('String/collapseWhitespace', () => {
  it('Converts all adjacent whitespace characters to a single space.', () => {
    expect(collapseWhitespace('too   \n  much  \t whitespace')).toEqual('too much whitespace');

    expect(collapseWhitespace('\n\t too   \n  much  \t whitespace    ')).toEqual('too much whitespace');

    expect(() => {
      return collapseWhitespace(null);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
