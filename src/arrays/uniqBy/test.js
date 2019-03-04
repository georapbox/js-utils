/* global uniqBy */

describe('Array/uniqBy', function () {
  it('Creates an object composed of keys generated from the results of running each element of array through iteratee', function () {
    var arr1 = [
      { id: 1, name: 'John' },
      { id: 2, name: 'George' },
      { id: 1, name: 'Helen' }
    ];

    var arr2 = [
      { v: 1.6 },
      { v: 2.1 },
      { v: 1.1 }
    ];

    expect(uniqBy(arr1, 'id')).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'George' }
    ]);

    expect(uniqBy(arr2, function (o) {
      return Math.floor(o.v);
    })).toEqual([
      { v: 1.6 },
      { v: 2.1 }
    ]);
  });
});
