describe('Array/uniqBy', function () {
  it('Creates an object composed of keys generated from the results of running each element of array through iteratee', function () {
    var arr1 = [
      { id: 1, name: 'John' },
      { id: 2, name: 'George' },
      { id: 1, name: 'Helen' },
      { id: 3, name: 'Helen' }
    ];

    var arr2 = [
      { v: 1.6 },
      { v: 2.1 },
      { v: 1.1 }
    ];

    var arr3 = [
      { x: '0', y: '1', z: '2' },
      { x: '1', y: '0', z: '2' },
      { x: '0', y: '1', z: '2' },
      { x: '2', y: '1', z: '0' }
    ];

    expect(uniqBy(arr1, 'id')).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'George' },
      { id: 3, name: 'Helen' }
    ]);

    expect(uniqBy(arr1, 'name')).toEqual([
      { id: 1, name: 'John' },

      { id: 2, name: 'George' },
      { id: 1, name: 'Helen' }
    ]);

    expect(uniqBy(arr2, function (o) {
      return Math.floor(o.v);
    })).toEqual([
      { v: 1.6 },
      { v: 2.1 }
    ]);

    expect(uniqBy(arr3, function (o) {
      return o.x + o.y + o.z;
    })).toEqual([
      { x: '0', y: '1', z: '2' },
      { x: '1', y: '0', z: '2' },
      { x: '2', y: '1', z: '0' }
    ]);
  });
});
