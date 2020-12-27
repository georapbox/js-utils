var diff = require('./diff');

describe('Array/diff', function () {
  var a = [1, 2, 3, 4, {}];
  var b = [5, 2, 10];

  it('diffs two arrays', function () {
    expect(diff(a, b)).toEqual([1, 3, 4, {}]);

    expect(diff(b, a)).toEqual([5, 10]);

    expect(function () {
      return diff(a);
    }).toThrow(new TypeError('Expected both arguments to be arrays'));

    expect(function () {
      return diff(null, b);
    }).toThrow(new TypeError('Expected both arguments to be arrays'));
  });
});
