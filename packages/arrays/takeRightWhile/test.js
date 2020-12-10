var takeRightWhile = require('./takeRightWhile');

describe('Array/takeRightWhile', function () {
  it('creates a slice of array with n items taken from the end', function () {
    var books = [
      { title: 'Javascript Design Patterns', read: false },
      { title: 'Programming Javascript Applications', read: true },
      { title: 'JavaScript The Good Parts', read: false },
      { title: 'Eloquent Javascript', read: false }
    ];

    var unread = takeRightWhile(books, function (book) {
      return !book.read;
    });

    var read = takeRightWhile(books, function (book) {
      return book.read;
    });

    expect(unread).toEqual([
      { title: 'JavaScript The Good Parts', read: false },
      { title: 'Eloquent Javascript', read: false }
    ]);

    expect(read).toEqual([]);

    expect(function () {
      return takeRightWhile({
        title: 'Javascript Design Patterns',
        read: false
      });
    }).toThrow('Expected an array for first argument');

    books[3].read = true;
    expect(takeRightWhile(books, function (book) {
      return !book.read;
    })).toEqual([]);

    expect(function () {
      return takeRightWhile(books, null);
    }).toThrow('Expected a function for second argument');
  });
});
