const after = require('./after');

describe('Function/after', function () {
  it('should invoke a function after it\'s been called n times', function () {
    let count = 0;
    let result;

    const doSomething = after(5, x => count += x);

    for (let i = 0; i < 10; i += 1) {
      result = doSomething(1);
    }

    expect(result).toEqual(6);

    expect(function () {
      return after('five', function () {
        return count += 1;
      });
    }).toThrow(new TypeError('Expected a number for first argument'));

    expect(function () {
      return after(5);
    }).toThrow(new TypeError('Expected a function for second argument'));
  });
});
