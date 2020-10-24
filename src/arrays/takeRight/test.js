var takeRight = require('./takeRight');

describe('Array/takeRight', function () {
  it('creates a slice of array with n items taken from the end', function () {
    expect(takeRight([1, 2, 3, 4, 5])).toEqual([5]);

    expect(takeRight([1, 2, 3, 4, 5], null)).toEqual([5]);

    expect(takeRight([1, 2, 3, 4, 5], NaN)).toEqual([5]);

    expect(takeRight([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);

    expect(takeRight([1, 2, 3, 4, 5], 0)).toEqual([]);

    expect(takeRight([1, 2, 3, 4, 5], -2)).toEqual([]);

    expect(takeRight([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5]);

    expect(takeRight([1, 2, 3, 4, 5], Number.MAX_VALUE)).toEqual([1, 2, 3, 4, 5]);

    expect(function () {
      return takeRight({}, 2);
    }).toThrow();

    expect(function () {
      return takeRight([1, 2, 3, 4, 5], '2');
    }).toThrow();
  });
});
