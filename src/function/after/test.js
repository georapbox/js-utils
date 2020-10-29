var after = require('./after');

describe('Function/after', function () {
  it('should invoke a function after it\'s been called n times', function () {
    var count = 0;
    var result;

    var doSomething = after(5, function () {
      return count += 1;
    });

    for (var i = 0; i < 10; i += 1) {
      result = doSomething();
    }

    expect(result).toEqual(6);

    expect(function () {
      return after('five', function () {
        return count += 1;
      });
    }).toThrow();

    expect(function () {
      return after(5);
    }).toThrow();
  });
});
