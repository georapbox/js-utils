const sort = require('./sort');

describe('Array/sort', () => {
  const numbers = [1, 2, 3, 10, 4, 9];
  const drinks = ['martini', 'coffee', 'wine', 'tequila'];

  it('sorts an array', () => {
    expect(sort(numbers)).toEqual([1, 2, 3, 4, 9, 10]);

    expect(sort(numbers, false)).toEqual([10, 9, 4, 3, 2, 1]);

    expect(sort(drinks)).toEqual(['coffee', 'martini', 'tequila', 'wine']);

    expect(sort(drinks, 1)).toEqual(['coffee', 'martini', 'tequila', 'wine']);

    expect(sort(drinks, false)).toEqual(['wine', 'tequila', 'martini', 'coffee']);

    expect(sort(drinks, NaN)).toEqual(['wine', 'tequila', 'martini', 'coffee']);

    expect(sort([4, 6, undefined, 2, 9, -10, 100, 321, -2, null, 99], true))
      .toEqual([-10, -2, 2, 4, 6, 9, 99, 100, 321]);

    expect(() => {
      return sort('efhtechjrd');
    }).toThrow(new TypeError('Expected an array for first argument'));
  });
});
