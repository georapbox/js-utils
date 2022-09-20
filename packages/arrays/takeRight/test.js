const takeRight = require('./takeRight');

describe('Array/takeRight', () => {
  it('creates a slice of array with n items taken from the end', () => {
    expect(takeRight([1, 2, 3, 4, 5])).toEqual([5]);

    expect(takeRight([1, 2, 3, 4, 5], NaN)).toEqual([5]);

    expect(takeRight([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);

    expect(takeRight([1, 2, 3, 4, 5], 0)).toEqual([]);

    expect(takeRight([1, 2, 3, 4, 5], -2)).toEqual([]);

    expect(takeRight([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5]);

    expect(takeRight([1, 2, 3, 4, 5], Number.MAX_VALUE)).toEqual([1, 2, 3, 4, 5]);

    expect(() => {
      return takeRight({}, 2);
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(() => {
      return takeRight([1, 2, 3, 4, 5], '2');
    }).toThrow(new TypeError('Expected a number for second argument'));
  });
});
