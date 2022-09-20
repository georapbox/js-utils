const dropRight = require('./dropRight');

describe('Array/dropRight', () => {
  it('creates a slice of array with n elements dropped from the end', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(dropRight(arr)).toEqual([1, 2, 3, 4]);

    expect(dropRight(arr)).toEqual([1, 2, 3, 4]);

    expect(dropRight(arr, NaN)).toEqual([1, 2, 3, 4]);

    expect(dropRight(arr, 3)).toEqual([1, 2]);

    expect(dropRight(arr, 3.8)).toEqual([1, 2]);

    expect(dropRight(arr, 0)).toEqual([1, 2, 3, 4, 5]);

    expect(dropRight(arr, -2)).toEqual([1, 2, 3, 4, 5]);

    expect(dropRight(arr, 10)).toEqual([]);

    expect(dropRight(arr, Number.MAX_VALUE)).toEqual([]);

    expect(() => {
      return dropRight({}, 2);
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(() => {
      return dropRight(arr, '2');
    }).toThrow(new TypeError('Expected a number for second argument'));
  });
});
