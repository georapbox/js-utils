/* global takeRightWhile */

describe('Array/takeRightWhile', function () {
  it('creates a slice of array with n items taken from the end', function () {
    var books = [
      {title: 'Javascript Design Patterns', read: false},
      {title: 'Programming Javascript Applications', read: true},
      {title: 'JavaScript The Good Parts', read: false},
      {title: 'Eloquent Javascript', read: false}
    ];

    var unread = takeRightWhile(books, function (book) {
      return !book.read;
    });

    var read = takeRightWhile(books, function (book) {
      return book.read;
    });

    expect(unread).toEqual([
      {title: 'JavaScript The Good Parts', read: false},
      {title: 'Eloquent Javascript', read: false}
    ]);

    expect(read).toEqual([]);

    expect(takeRightWhile(books).length).toEqual(books.length);

    expect(function () {
      return takeRightWhile({
        title: 'Javascript Design Patterns',
        read: false
      });
    }).toThrow();

    books[3].read = true;
    expect(takeRightWhile(books, function (book) {
      return !book.read;
    })).toEqual([]);
  });
});
