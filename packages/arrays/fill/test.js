const fill = require('./fill');

describe('Array/fill', function () {
  function runTests() {
    expect(fill(['a', 'b', 'c'], '*')).toEqual(['*', '*', '*']);

    expect(fill(['a', 'b', 'c'], '*', 0, 2)).toEqual(['*', '*', 'c']);

    expect(fill(['a', 'b', 'c'], '*', -1, 3)).toEqual(['a', 'b', '*']);

    expect(fill(['a', 'b', 'c'], '*', -1, 2)).toEqual(['a', 'b', 'c']);

    expect(fill(['a', 'b', 'c'], '*', 0, -2)).toEqual(['*', 'b', 'c']);

    expect(fill(['a', 'b', 'c'])).toEqual([undefined, undefined, undefined]);

    expect(fill([])).toEqual([]);

    expect(fill([1, 2, 3, 4, 5], '*', 3, 2)).toEqual([1, 2, 3, 4, 5]);

    expect(fill([1, 2, 3], 4, NaN, NaN)).toEqual([1, 2, 3]);

    expect(fill([1, 2, 3], 4, NaN, 2)).toEqual([4, 4, 3]);

    expect(fill([1, 2, 3], 4, 0, NaN)).toEqual([1, 2, 3]);

    expect(function () {
      return fill({
        foo: 'bar'
      }, '*');
    }).toThrow(new TypeError('Expected an array for first argument'));
  }

  it('fills elements of array with value from start up to end (not including end) (Array.prototype.fill is supported)', function () {
    runTests();
  });

  it('fills elements of array with value from start up to end (not including end) (Array.prototype.fill is not supported)', function () {
    const nativeCode = Array.prototype.fill;
    Array.prototype.fill = null;
    runTests();
    Array.prototype.fill = nativeCode;
  });
});
