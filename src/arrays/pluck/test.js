var pluck = require('./pluck');

describe('Array/pluck', function () {
  var books = [
    {title: 'Around the World in Eighty Days', author: 'Jules Verne'},
    {title: 'The Mist', author: 'Stephen King'},
    {title: 'Journey to the Center of the Earth', author: 'Jules Verne'},
    {title: 'The Monster in the Closet', author: 'Stephen King'}
  ];

  it('plucks the array', function () {
    expect(Object.prototype.toString.call(pluck(books, 'author'))).toBe('[object Array]');

    expect(pluck(books, 'author').length).toBe(4);

    expect(pluck(books, 'author').indexOf('Jules Verne')).toBeGreaterThan(-1);

    expect(pluck(books, 'author').indexOf('Stephen King')).toBeGreaterThan(-1);

    expect(function () {
      return pluck({}, 'author');
    }).toThrow();
  });
});
