var takeWhile = require('./takeWhile');

describe('Array/takeWhile', function () {
  it('creates a slice of array with elements taken from the beginning, until predicate returns falsy', function () {
    var books = [
      { title: 'Javascript Design Patterns', read: false },
      { title: 'Programming Javascript Applications', read: false },
      { title: 'JavaScript The Good Parts', read: true },
      { title: 'Eloquent Javascript', read: false }
    ];

    var firstUnread = takeWhile(books, function (book) {
      return !book.read;
    });

    var firstRead = takeWhile(books, function (book) {
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
    }).toThrow('Expected an array for first argument');

    expect(function () {
      return takeWhile(books, null);
    }).toThrow('Expected a function for second argument');
  });
});
