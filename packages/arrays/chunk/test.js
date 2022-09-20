const chunk = require('./chunk');

describe('Array/chunk', () => {
  it('creates an array of elements split into groups the length of size specified', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4]
    ]);

    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5]
    ]);

    expect(chunk([1, 2, 3, 4], 3)).toEqual([
      [1, 2, 3],
      [4]
    ]);

    expect(chunk([1, 2, 3, 4], 2.7)).toEqual([
      [1, 2],
      [3, 4]
    ]);

    expect(chunk([], 2)).toEqual([]);

    expect(() => {
      return chunk({
        a: 'a',
        b: 'b'
      }, 2);
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(() => {
      return chunk([1, 2, 3, 4], '2');
    }).toThrow(new TypeError('Expected a number for second argument'));

    expect(() => {
      return chunk([1, 2, 3, 4], -1);
    }).toThrow(new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for second argument'));

    expect(() => {
      return chunk([1, 2, 3, 4], Infinity);
    }).toThrow(new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for second argument'));

    expect(() => {
      return chunk([1, 2, 3, 4], Number.MAX_SAFE_INTEGER + 1);
    }).toThrow(new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for second argument'));

    expect(() => {
      return chunk([1, 2, 3, 4], NaN);
    }).toThrow(new RangeError('Expected a positive number lower than Number.MAX_SAFE_INTEGER for second argument'));
  });
});
