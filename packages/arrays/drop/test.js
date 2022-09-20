const drop = require('./drop');

describe('Array/drop', () => {
  it('creates a slice of array with n elements dropped from the beginning', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(drop(arr)).toEqual([2, 3, 4, 5]);

    expect(drop(arr)).toEqual([2, 3, 4, 5]);

    expect(drop(arr, NaN)).toEqual([2, 3, 4, 5]);

    expect(drop(arr, 3)).toEqual([4, 5]);

    expect(drop(arr, 3.8)).toEqual([4, 5]);

    expect(drop(arr, 0)).toEqual([1, 2, 3, 4, 5]);

    expect(drop(arr, -2)).toEqual([1, 2, 3, 4, 5]);

    expect(drop(arr, 10)).toEqual([]);

    expect(drop(arr, Number.MAX_VALUE)).toEqual([]);

    expect(() => {
      return drop({}, 2);
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(() => {
      return drop(arr, '2');
    }).toThrow(new TypeError('Expected a number for second argument'));
  });
});
