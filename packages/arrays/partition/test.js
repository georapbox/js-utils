const partition = require('./partition');

describe('Array/partition', () => {
  it('creates an array of elements split into two groups', () => {
    const users = [{
      name: 'John',
      isAdmin: true
    }, {
      name: 'George',
      isAdmin: false
    }, {
      name: 'Alice',
      isAdmin: true
    }];

    const numbers = [1, 3, 5, -4, 6, -2];

    const partitionedNumbers = partition(numbers, element => {
      return element > 0;
    });
    const positive = partitionedNumbers[0];
    const nonPositive = partitionedNumbers[1];

    expect(positive).toEqual([1, 3, 5, 6]);
    expect(nonPositive).toEqual([-4, -2]);

    const partitionedUsers = partition(users, element => {
      return element.isAdmin;
    });
    const admins = partitionedUsers[0];
    const nonAdmins = partitionedUsers[1];

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

    expect(partition([], element => {
      return element.isAdmin;
    })).toEqual([[], []]);

    expect(partition([1, 2, 3])).toEqual([[1, 2, 3], []]);

    expect(() => {
      return partition(null, element => {
        return element.isAdmin;
      });
    }).toThrow(new TypeError('Expected an array for first argument'));

    expect(() => {
      return partition(users, null);
    }).toThrow(new TypeError('Expected a function for second argument'));
  });
});
