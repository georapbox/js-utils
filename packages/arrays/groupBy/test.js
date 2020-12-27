var groupBy = require('./groupBy');

describe('Array/groupBy', function () {
  it('Creates an object composed of keys generated from the results of running each element of array through iteratee', function () {
    var arr1 = ['one', 'two', 'three', 'four', 'five'];

    var arr2 = [
      { name: 'John' },
      { name: 'George' },
      { name: 'Helen' },
      { name: 'John' },
      { name: 'Helen' },
      { name: 'Alex' },
      { name: 'George' }
    ];

    var arr3 = [9.5, 6.3, 4.9, 6.8, 9.0, 9.3];

    var exp1 = {
      3: ['one', 'two'],
      4: ['four', 'five'],
      5: ['three']
    };

    var exp2 = {
      John: [{ name: 'John' }, { name: 'John' }],
      George: [{ name: 'George' }, { name: 'George' }],
      Helen: [{ name: 'Helen' }, { name: 'Helen' }],
      Alex: [{ name: 'Alex' }]
    };

    var exp3 = {
      4: [4.9],
      6: [6.3, 6.8],
      9: [9.5, 9.0, 9.3]
    };

    expect(groupBy(arr1, 'length')).toEqual(exp1);

    expect(groupBy(arr1, function (item) {
      return item.length;
    })).toEqual(exp1);

    expect(groupBy(arr2, 'name')).toEqual(exp2);

    expect(groupBy(arr2, function (item) {
      return item.name;
    })).toEqual(exp2);

    expect(groupBy(arr3, Math.floor)).toEqual(exp3);

    expect(function () {
      return groupBy({}, '2');
    }).toThrow(new TypeError('Expected an array for first argument'));
  });
});
