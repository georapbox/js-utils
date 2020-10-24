var collapseWhitespace = require('./collapseWhitespace');

describe('String/collapseWhitespace', function () {
  it('Converts all adjacent whitespace characters to a single space.', function () {
    expect(collapseWhitespace('too   \n  much  \t whitespace'))
    .toEqual('too much whitespace');

    expect(collapseWhitespace('\n\t too   \n  much  \t whitespace    '))
    .toEqual('too much whitespace');
  });
});
