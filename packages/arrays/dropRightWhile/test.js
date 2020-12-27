var dropRightWhile = require('./dropRightWhile');

describe('Array/dropRightWhile', function () {
  it('creates a slice of `array` excluding elements dropped from the beginning, until `predicate` returns falsy', function () {
    var books = [
      {
        title: 'Javascript Design Patterns',
        read: false
      },
      {
        title: 'Programming Javascript Applications',
        read: true
      },
      {
        title: 'JavaScript The Good Parts',
        read: false
      },
      {
        title: 'Eloquent Javascript',
        read: false
      }
    ];

    expect(dropRightWhile(books, function (book) {
      return !book.read;
    })).toEqual([{
      title: 'Javascript Design Patterns',
      read: false
    }, {
      title: 'Programming Javascript Applications',
      read: true
    }]);

    expect(dropRightWhile(books, function (book) {
      return book.read;
    })).toHaveLength(4);

    expect(function () {
      dropRightWhile(null, function (book) {
        return !book.read;
      });
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(function () {
      dropRightWhile(books, null);
    }).toThrow(new TypeError('Expected a function for second argument'));
  });
});
