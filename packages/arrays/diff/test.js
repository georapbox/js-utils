const diff = require('./diff');

describe('Array/diff', () => {
  const a = [1, 2, 3, 4, {}];
  const b = [5, 2, 10];

  it('diffs two arrays', () => {
    expect(diff(a, b)).toEqual([1, 3, 4, {}]);

    expect(diff(b, a)).toEqual([5, 10]);

    expect(() => {
      return diff(a);
    }).toThrow(new TypeError('Expected both arguments to be arrays'));

    expect(() => {
      return diff(null, b);
    }).toThrow(new TypeError('Expected both arguments to be arrays'));
  });
});
