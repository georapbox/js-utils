var find = require('./find');

describe('Array/find', function () {
  function runTests() {
    var fruits = [
      { name: 'apples', quantity: 2 },
      { name: 'bananas', quantity: 0 },
      { name: 'cherries', quantity: 5 },
      { name: 'melons', quantity: 0 }
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

    expect(cherries).toEqual({
      name: 'cherries',
      quantity: 5
    });

    expect(bananas).toEqual({
      name: 'bananas',
      quantity: 0
    });

    expect(three).toEqual(3);

    expect(undef).toEqual(undefined);

    expect(function () {
      return find({
        name: 'cherries',
        quantity: 5
      }, function (element) {
        return element.name === 'cherries';
      });
    }).toThrow(new TypeError('Expected an an array for first argument'));

    expect(function () {
      return find(fruits);
    }).toThrow(new TypeError('Expected a function for second argument'));
  }

  it('returns a value in the array, if an element in the array satisfies the provided testing function (Array.prototype.find is supported)', function () {
    runTests();
  });

  it('returns a value in the array, if an element in the array satisfies the provided testing function (Array.prototype.find is not supported)', function () {
    var nativeCode = Array.prototype.find;
    Array.prototype.find = null;
    runTests();
    Array.prototype.find = nativeCode;
  });
});
