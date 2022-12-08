const uniq = require('./uniq');

describe('Array/uniq', () => {
  it('removes duplicate values from an array', () => {
    const obj = { foo: 'bar' };
    const arr = ['foo', 'bar'];
    const values = ['a', 'a', 'b', '2', 2, obj, obj, arr, arr, true, true, false, false, NaN, NaN];

    expect(uniq(values)).toEqual(['a', 'b', '2', 2, obj, arr, true, false, NaN]);

    expect(() => {
      return uniq({});
    }).toThrow(new TypeError('Expected an array for first argument'));
  });
});
