const intersect = require('./intersect');

describe('Array/intersect', () => {
  const runTests = () => {
    const arrA = [NaN, 3, 8, 'foo', 'bar'];
    const arrB = [2, 7, 'foo', NaN, 3];
    const arrC = [1, 2, 3, NaN];
    const arrD = [4, 5, 6];
    const arrE = [1, null, 2, NaN, 3, void 0];
    const arrF = ['1', void 0, '2', null, '3', NaN];

    expect(intersect(arrA, arrB)).toEqual([NaN, 3, 'foo']);

    expect(intersect(arrC, arrD)).toEqual([]);

    expect(intersect(arrA, arrB, arrC)).toEqual([NaN, 3]);

    expect(intersect(arrE, arrF)).toEqual([null, NaN, void 0]);

    expect(() => {
      return intersect(arrA, {});
    }).toThrow(new TypeError('Expected all arguments to be arrays'));

    expect(() => {
      return intersect({}, arrB);
    }).toThrow(new TypeError('Expected all arguments to be arrays'));
  };

  it('creates an array of unique values that are included in all given arrays (Array.prototype.includes is supported)', () => {
    runTests();
  });

  it('creates an array of unique values that are included in all given arrays (Array.prototype.includes is not supported)', () => {
    const nativeCode = Array.prototype.includes;
    Array.prototype.includes = null;
    runTests();
    Array.prototype.includes = nativeCode;
  });
});
