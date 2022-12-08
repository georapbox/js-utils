const pluck = require('./pluck');

describe('Array/pluck', () => {
  const books = [
    { title: 'Around the World in Eighty Days', author: 'Jules Verne' },
    { title: 'The Mist', author: 'Stephen King' },
    { title: 'Journey to the Center of the Earth', author: 'Jules Verne' },
    { title: 'The Monster in the Closet', author: 'Stephen King' }
  ];

  it('plucks the array', () => {
    expect(Array.isArray(pluck(books, 'author'))).toBe(true);

    expect(pluck(books, 'author')).toHaveLength(4);

    expect(pluck(books, 'author').indexOf('Jules Verne')).toBeGreaterThan(-1);

    expect(pluck(books, 'author').indexOf('Stephen King')).toBeGreaterThan(-1);

    expect(pluck(books)).toHaveLength(0);

    expect(() => {
      return pluck({}, 'author');
    }).toThrow(new TypeError('Expected an array for first argument'));
  });
});
