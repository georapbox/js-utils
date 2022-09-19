const flip = require('./flip.js');

describe('flip', () => {
  it('creates a new function that invokes the original function with its parameters reversed', () => {
    const args = (...args) => args;
    expect(args(1, 2, 3, 4)).toEqual([1, 2, 3, 4]);
    expect(flip(args)(1, 2, 3, 4)).toEqual([4, 3, 2, 1]);
    expect(flip(args)()).toEqual([]);

    const subtract = (a, b) => a - b;
    expect(subtract(1, 2)).toBe(-1);
    expect(flip(subtract)(1, 2)).toBe(1);

    expect(() => {
      return flip(null);
    }).toThrow(new TypeError('Expected a function for first argument'));
  });
});
