const takeWhile = require('./takeWhile');

describe('Array/takeWhile', () => {
  it('creates a slice of array with elements taken from the beginning, until predicate returns falsy', () => {
    const books = [
      { title: 'Javascript Design Patterns', read: false },
      { title: 'Programming Javascript Applications', read: false },
      { title: 'JavaScript The Good Parts', read: true },
      { title: 'Eloquent Javascript', read: false }
    ];

    const firstUnread = takeWhile(books, book => {
      return !book.read;
    });

    const firstRead = takeWhile(books, book => {
      return book.read;
    });

    expect(firstUnread).toEqual([
      { title: 'Javascript Design Patterns', read: false },
      { title: 'Programming Javascript Applications', read: false }
    ]);

    expect(firstRead).toEqual([]);

    expect(() => {
      return takeWhile({
        title: 'Javascript Design Patterns',
        read: false
      });
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(() => {
      return takeWhile(books, null);
    }).toThrow(new TypeError('Expected a function for second argument'));
  });
});
