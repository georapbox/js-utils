var dropWhile = require('./dropWhile');

describe('Array/dropWhile', function () {
  it('creates a slice of `array` excluding elements dropped from the beginning, until `predicate` returns falsy', function () {
    var books = [
      {
        title: 'Javascript Design Patterns',
        read: false
      },
      {
        title: 'Programming Javascript Applications',
        read: false
      },
      {
        title: 'JavaScript The Good Parts',
        read: true
      },
      {
        title: 'Eloquent Javascript',
        read: false
      }
    ];

    expect(dropWhile(books, function (book) {
      return !book.read;
    })).toEqual([
      {
        title: 'JavaScript The Good Parts',
        read: true
      },
      {
        title: 'Eloquent Javascript',
        read: false
      }
    ]);

    expect(dropWhile(books, function (book) {
      return book.read;
    }).length).toEqual(4);

    expect(dropWhile(books).length).toEqual(4);
  });
});
