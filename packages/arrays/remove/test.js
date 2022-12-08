const remove = require('./remove');

describe('Array/remove', () => {
  it('removes elements from array at specific index(es)', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(remove(arr, 0)).toEqual([2, 3, 4, 5]);

    expect(remove(arr, 0, 1)).toEqual([3, 4, 5]);

    expect(remove(arr, 1, 0)).toEqual([3, 4, 5]);

    expect(remove(arr, 0, 4)).toEqual([2, 3, 4]);

    expect(remove(arr, 4, 0)).toEqual([2, 3, 4]);

    expect(remove(arr, 0, 0)).toEqual([2, 3, 4, 5]);

    expect(remove(arr, arr.length)).toEqual([1, 2, 3, 4, 5]);

    expect(remove(arr, arr.length - 1)).toEqual([1, 2, 3, 4]);

    expect(remove(arr)).toEqual([1, 2, 3, 4, 5]);

    expect(remove(arr, NaN)).toEqual([1, 2, 3, 4, 5]);

    expect(remove(arr, undefined)).toEqual([1, 2, 3, 4, 5]);

    expect(remove(arr, null)).toEqual([1, 2, 3, 4, 5]);

    expect(remove(arr, null, undefined, NaN)).toEqual([1, 2, 3, 4, 5]);

    expect(remove(arr, '0', '1')).toEqual([1, 2, 3, 4, 5]);

    expect(() => {
      return remove({ foo: 'bar' }, [0]);
    }).toThrow(new TypeError('Expected an array for first argument'));
  });
});
