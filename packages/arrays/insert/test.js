const insert = require('./insert');

describe('Array/insert', () => {
  it('inserts elements to array at specific index', () => {
    const arr = [1, 2, 3];

    expect(insert(arr, 0, 'a')).toEqual(['a', 1, 2, 3]);

    expect(insert(arr, 0.9, 'a')).toEqual(['a', 1, 2, 3]);

    expect(insert(arr, 1.2, 'a')).toEqual([1, 'a', 2, 3]);

    expect(insert(arr, -1.2, 'a')).toEqual([1, 2, 'a', 3]);

    expect(insert(arr, -0, 'a')).toEqual(['a', 1, 2, 3]);

    expect(insert(arr, 2, 'a')).toEqual([1, 2, 'a', 3]);

    expect(insert(arr, -1, 'a')).toEqual([1, 2, 'a', 3]);

    expect(insert(arr, arr.length + 1, 'a')).toEqual([1, 2, 3, 'a']);

    expect(insert(arr, 1, 'a', 'b', 'c')).toEqual([1, 'a', 'b', 'c', 2, 3]);

    expect(insert(arr, 2)).toEqual([1, 2, 3]);

    expect(insert(arr, 2, undefined)).toEqual([1, 2, undefined, 3]);

    expect(() => {
      return insert({ foo: 'bar' }, 0, ['a', 'b']);
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(() => {
      return insert(arr, '0', ['a', 'b']);
    }).toThrow(new TypeError('Expected a number for second argument'));
  });
});
