const takeWhile = require('./takeWhile');

describe('Array/takeWhile', function () {
  it('creates a slice of array with elements taken from the beginning, until predicate returns falsy', function () {
    const books = [
      { title: 'Javascript Design Patterns', read: false },
      { title: 'Programming Javascript Applications', read: false },
      { title: 'JavaScript The Good Parts', read: true },
      { title: 'Eloquent Javascript', read: false }
    ];

    const firstUnread = takeWhile(books, function (book) {
      return !book.read;
    });

    const firstRead = takeWhile(books, function (book) {
      return book.read;
    });

    expect(firstUnread).toEqual([
      { title: 'Javascript Design Patterns', read: false },
      { title: 'Programming Javascript Applications', read: false }
    ]);

    expect(firstRead).toEqual([]);

    expect(function () {
      return takeWhile({
        title: 'Javascript Design Patterns',
        read: false
      });
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(function () {
      return takeWhile(books, null);
    }).toThrow(new TypeError('Expected a function for second argument'));
  });
});
