const take = require('./take');

describe('Array/take', () => {
  it('creates a slice of array with n items taken from the beginning', () => {
    expect(take([1, 2, 3, 4, 5])).toEqual([1]);

    expect(take([1, 2, 3, 4, 5], NaN)).toEqual([1]);

    expect(take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);

    expect(take([1, 2, 3, 4, 5], 0)).toEqual([]);

    expect(take([1, 2, 3, 4, 5], -2)).toEqual([]);

    expect(take([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5]);

    expect(take([1, 2, 3, 4, 5], Number.MAX_VALUE)).toEqual([1, 2, 3, 4, 5]);

    expect(() => {
      return take({}, 2);
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(() => {
      return take([1, 2, 3, 4, 5], '2');
    }).toThrow(new TypeError('Expected a number for second argument'));
  });
});
