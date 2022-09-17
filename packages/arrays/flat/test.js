const flat = require('./flat');

describe('Array/flat', function () {
  function runTests() {
    const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];

    expect(flat(arr)).toEqual([1, 2, 3, 4, [5, 6, [7, 8]]]);

    expect(flat(arr, 1)).toEqual([1, 2, 3, 4, [5, 6, [7, 8]]]);

    expect(flat(arr, 2)).toEqual([1, 2, 3, 4, 5, 6, [7, 8]]);

    expect(flat(arr, '2')).toEqual([1, 2, 3, 4, 5, 6, [7, 8]]);

    expect(flat(arr, 3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);

    expect(flat(arr, '3.6')).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);

    expect(flat(arr, Infinity)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);

    expect(flat(arr, -Infinity)).toEqual([1, 2, [3, 4, [5, 6, [7, 8]]]]);

    expect(flat(arr, 0)).toEqual([1, 2, [3, 4, [5, 6, [7, 8]]]]);

    expect(flat(arr, +0)).toEqual([1, 2, [3, 4, [5, 6, [7, 8]]]]);

    expect(flat(arr, -0)).toEqual([1, 2, [3, 4, [5, 6, [7, 8]]]]);

    expect(flat(arr, NaN)).toEqual([1, 2, [3, 4, [5, 6, [7, 8]]]]);

    expect(flat(arr, 0.5)).toEqual([1, 2, [3, 4, [5, 6, [7, 8]]]]);

    expect(function () {
      return flat({});
    }).toThrow(new TypeError('Expected an array for first argument'));
  }

  it('flattens recursively up to the specified depth (Array.prototype.flat is supported)', function () {
    runTests();
  });

  it('flattens recursively up to the specified depth (Array.prototype.flat is not supported)', function () {
    const nativeCode = Array.prototype.flat;
    Array.prototype.flat = null;
    runTests();
    Array.prototype.flat = nativeCode;
  });
});
