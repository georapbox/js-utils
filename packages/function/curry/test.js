var curry = require('./curry.js');

describe('Function/curry', () => {
  it('should return a curried function until all expected arguments are satisfied', () => {
    var add = curry(function (a, b, c) {
      return a + b + c;
    });

    var addOne = add(1);
    var addTwo = addOne(2);
    var res = addTwo(3);

    expect(res).toEqual(6);
  });

  it('providing arity when cannot be automatically calculated', () => {
    var add = curry(function (a = 0, ...args) {
      return a + args[0] + args[1];
    }, 3);

    var addOne = add(1);
    var addTwo = addOne(2);
    var res = addTwo(3);

    expect(add.length).toBe(0);
    expect(res).toBe(6);
  });

  it('throws if first argument is not a function', function () {
    expect(function () {
      return curry();
    }).toThrow('Expected a function for first argument');
  });

  it('throws if second argument is not a number', function () {
    expect(function () {
      return curry(function (a, b) {
        return a + b;
      }, '2')(1)(2);
    }).toThrow('Expected a number for second argument');
  });
});