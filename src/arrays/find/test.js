describe('Array/find', function () {
  it('returns a value in the array, if an element in the array satisfies the provided testing function', function () {
    var fruits = [
      {name: 'apples', quantity: 2},
      {name: 'bananas', quantity: 0},
      {name: 'cherries', quantity: 5},
      {name: 'melons', quantity: 0}
    ];

    var cherries = find(fruits, function (element) {
      return element.name === 'cherries';
    });

    var bananas = find(fruits, function (element) {
      return element.quantity === 0;
    });

    var three = find([1, 2, 3, 4, 5], function (element) {
      return element === 3;
    });

    var undef = find([1, 2, 3, 4, 5], function (element) {
      return element === 10;
    });

    expect(cherries).toEqual({name: 'cherries', quantity: 5});

    expect(bananas).toEqual({name: 'bananas', quantity: 0});

    expect(three).toEqual(3);

    expect(undef).toEqual(undefined);

    expect(function () {
      return find({name: 'cherries', quantity: 5}, function (element) {
        return element.name === 'cherries';
      });
    }).toThrow();

    expect(function () {
      return find(fruits);
    }).toThrow();
  });
});
