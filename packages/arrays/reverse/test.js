var reverse = require('./reverse');

describe('Array/reverse', function () {
  it('returns a new reversed array', function () {
    var numbers = [1, 2, 3];
    var revNumbers = reverse(numbers);

    expect(numbers).toEqual([1, 2, 3]);

    expect(revNumbers).toEqual([3, 2, 1]);

    expect(function () {
      return reverse({ a: '1', b: '2' });
    }).toThrow(new TypeError('Expected an array for first argument'));
  });
});
