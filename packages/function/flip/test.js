var flip = require('./flip.js');

describe('Function/flip', function () {
  it('creates a new function that invokes the original function with its parameters reversed', function () {
    var args = function () {
      return Array.prototype.slice.call(arguments, 0);
    };

    expect(args(1, 2, 3, 4)).toEqual([1, 2, 3, 4]);
    expect(flip(args)(1, 2, 3, 4)).toEqual([4, 3, 2, 1]);
    expect(flip(args)()).toEqual([]);

    var subtract = function (a, b) {
      return a - b;
    };

    expect(subtract(1, 2)).toBe(-1);
    expect(flip(subtract)(1, 2)).toBe(1);

    expect(function () {
      return flip(null)(1, 2);
    }).toThrow('Expected a function for first argument');
  });
});
