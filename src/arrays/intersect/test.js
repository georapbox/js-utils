var intersect = require('./intersect');

describe('Array/intersect', function () {
  it('creates an array of unique values that are included in all given arrays.', function () {
    var arrA = [NaN, 3, 8, 'foo', 'bar'];
    var arrB = [2, 7, 'foo', NaN, 3];
    var arrC = [1, 2, 3, NaN];
    var arrD = [4, 5, 6];

    expect(intersect(arrA, arrB)).toEqual([NaN, 3, 'foo']);

    expect(intersect(arrC, arrD)).toEqual([]);

    expect(intersect(arrA, arrB, arrC)).toEqual([NaN, 3]);

    expect(function () {
      return intersect(arrA, {});
    }).toThrow();
  });
});
