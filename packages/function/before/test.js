const before = require('./before');

describe('Function/before', function () {
  it('should invoke a function up to 5 times', function () {
    let count = 0;
    let result;

    const doSomething = before(6, x => count += x);

    for (let i = 0; i < 10; i += 1) {
      result = doSomething(1);
    }

    expect(result).toEqual(5);

    expect(function () {
      return before('five', function () {
        return count += 1;
      });
    }).toThrow(new TypeError('Expected a number for first argument'));

    expect(function () {
      return before(5);
    }).toThrow(new TypeError('Expected a function for second argument'));
  });
});
