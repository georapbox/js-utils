var negate = require('./negate');

describe('Function/negate', function () {
  it('should negate the result of the predicate function', function () {
    var isEven = function (n) {
      return n % 2 === 0;
    };

    var numbers = [1, 2, 3, 4, 5, 6];
    var evens = numbers.filter(isEven);
    var odds = numbers.filter(negate(isEven));

    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([1, 3, 5]);
  });
});
