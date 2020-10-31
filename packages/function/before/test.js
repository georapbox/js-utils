var before = require('./before');

describe('Function/before', function () {
  it('should invoke a function up to 5 times', function () {
    var count = 0,
      result;

    var doSomething = before(6, function () {
      return count += 1;
    });

    var i = 0;

    for (i = 0; i < 10; i += 1) {
      result = doSomething();
    }

    expect(result).toEqual(5);

    expect(function () {
      return before('five', function () {
        return count += 1;
      });
    }).toThrow('Expected a number for first argument');

    expect(function () {
      return before(5);
    }).toThrow('Expected a function for second argument');
  });
});
