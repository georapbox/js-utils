var partition = require('./partition');

describe('Array/partition', function () {
  it('creates an array of elements split into two groups', function () {
    var users = [{
      name: 'John',
      isAdmin: true
    }, {
      name: 'George',
      isAdmin: false
    }, {
      name: 'Alice',
      isAdmin: true
    }];

    var numbers = [1, 3, 5, -4, 6, -2];

    var partitionedNumbers = partition(numbers, function (element) {
      return element > 0;
    });
    var positive = partitionedNumbers[0];
    var nonPositive = partitionedNumbers[1];

    expect(positive).toEqual([1, 3, 5, 6]);
    expect(nonPositive).toEqual([-4, -2]);

    var partitionedUsers = partition(users, function (element) {
      return element.isAdmin;
    });
    var admins = partitionedUsers[0];
    var nonAdmins = partitionedUsers[1];

    expect(admins).toEqual([{
      name: 'John',
      isAdmin: true
    }, {
      name: 'Alice',
      isAdmin: true
    }]);

    expect(nonAdmins).toEqual([{
      name: 'George',
      isAdmin: false
    }]);

    expect(partition([], function (element) {
      return element.isAdmin;
    })).toEqual([[], []]);

    expect(partition(null, function (element) {
      return element.isAdmin;
    })).toEqual([[], []]);

    expect(partition(null, 1)).toEqual([[], []]);

    expect(partition([1, 2, 3])).toEqual([[1, 2, 3], []]);
  });
});
