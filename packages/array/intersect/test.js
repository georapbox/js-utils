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

  const runUniqueValueTests = () => {
    const sharedObject = {};
    const otherObject = {};
    const firstArray = [NaN, 'first', -0, 0, sharedObject, otherObject, sharedObject, NaN, 7, 7];
    const secondArray = [otherObject, NaN, 0, sharedObject, 'first', otherObject];
    const thirdArray = [NaN, sharedObject, -0, 'first', 0];
    const result = intersect(firstArray, secondArray, thirdArray);

    expect(result).toEqual([NaN, 'first', -0, sharedObject]);
    expect(result[0]).toBeNaN();
    expect(result[2]).toBe(-0);
    expect(Object.is(result[2], -0)).toBe(true);
    expect(result[3]).toBe(sharedObject);
    expect(intersect([otherObject], [sharedObject])).toEqual([]);

    expect(intersect([4, 2, 8], [8, 4, 2], [2, 8, 4])).toEqual([4, 2, 8]);
    expect(intersect([1, 1, 2], [3, 3], [1, 1])).toEqual([]);
    expect(intersect([], [1, 1], [1])).toEqual([]);

    const sparseFirstArray = Array(3);
    sparseFirstArray[1] = 1;
    sparseFirstArray[2] = 1;
    const sparseResult = intersect(sparseFirstArray, [undefined, 1], [1, undefined]);
    expect(sparseResult).toEqual([1]);
    expect(0 in sparseResult).toBe(true);

    const singleArray = [2, 2, NaN];
    expect(intersect(singleArray)).toBe(singleArray);
  };

  const runWithIncludesDisabled = (callback) => {
    const nativeIncludes = Array.prototype.includes;

    try {
      Array.prototype.includes = undefined;
      callback();
    } finally {
      Array.prototype.includes = nativeIncludes;
    }
  };

  it('creates an array of unique values that are included in all given arrays (Array.prototype.includes is supported)', () => {
    runTests();
    runUniqueValueTests();
  });

  it('creates an array of unique values that are included in all given arrays (Array.prototype.includes is not supported)', () => {
    runWithIncludesDisabled(() => {
      runTests();
      runUniqueValueTests();
    });
  });
});
