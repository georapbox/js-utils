describe('Function/curry', function () {
  var sum = function (a, b, c) {
    return a + b + c;
  };
  var curriedSum = curry(sum, 3);
  var sumTwo = curriedSum(2);
  var sumThree = sumTwo(3);
  var finalSum = sumThree(5);

  it('should return a curried function until all expected arguments are satisfied', function () {
    expect(typeof sumTwo).toBe('function');
    expect(typeof sumThree).toBe('function');
    expect(typeof finalSum).toBe('number');
    expect(finalSum).toEqual(10);
  });

  it('executes in the correct context', function () {
    var converter = function (ratio, input) {
      return (input * ratio).toFixed(this.dps);
    };
    var milesToKm = curry(converter)(1.62);

    expect(milesToKm.call({dps: 0}, 35)).toBe('57');
    expect(milesToKm.call({dps: 2}, 35)).toBe('56.70');
  });

  it('ensures that user specified float point arity is correctly converted', function () {
    var add = function (a, b) {
      return a + b;
    };
    var curriedAdd = curry(add, '2.6');

    expect(curriedAdd(2)(5)).toBe(7);
  });

  it('should throw error if supply more arguments than expected', function () {
    expect(function () {
      return finalSum(10);
    }).toThrow();
  });
});
