const negate = require('./negate');

describe('Function/negate', () => {
  it('should negate the result of the predicate function', () => {
    const isEven = n => n % 2 === 0;

    const numbers = [1, 2, 3, 4, 5, 6];
    const evens = numbers.filter(isEven);
    const odds = numbers.filter(negate(isEven));

    expect(evens).toEqual([2, 4, 6]);

    expect(odds).toEqual([1, 3, 5]);

    expect(() => {
      return negate();
    }).toThrow(new TypeError('Expected a function for first argument'));
  });
});
