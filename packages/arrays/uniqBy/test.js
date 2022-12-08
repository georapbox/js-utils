const uniqBy = require('./uniqBy');

describe('Array/uniqBy', () => {
  it('Creates an object composed of keys generated from the results of running each element of array through iteratee', () => {
    const arr1 = [
      { id: 1, name: 'John' },
      { id: 2, name: 'George' },
      { id: 1, name: 'Helen' },
      { id: 3, name: 'Helen' }
    ];

    const arr2 = [
      { v: 1.6 },
      { v: 2.1 },
      { v: 1.1 }
    ];

    const arr3 = [
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

    expect(uniqBy(arr2, o => {
      return Math.floor(o.v);
    })).toEqual([
      { v: 1.6 },
      { v: 2.1 }
    ]);

    expect(uniqBy(arr3, o => {
      return o.x + o.y + o.z;
    })).toEqual([
      { x: '0', y: '1', z: '2' },
      { x: '1', y: '0', z: '2' },
      { x: '2', y: '1', z: '0' }
    ]);

    expect(() => {
      return uniqBy({}, 'name');
    }).toThrow(new TypeError('Expected an array for first argument'));
  });
});
