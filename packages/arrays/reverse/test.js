const reverse = require('./reverse');

describe('Array/reverse', function () {
  it('returns a new reversed array', function () {
    const numbers = [1, 2, 3];
    const revNumbers = reverse(numbers);

    expect(numbers).toEqual([1, 2, 3]);

    expect(revNumbers).toEqual([3, 2, 1]);

    expect(function () {
      return reverse({ a: '1', b: '2' });
    }).toThrow(new TypeError('Expected an array for first argument'));
  });
});
