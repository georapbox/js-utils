const zip = require('./zip');

describe('Array/zip', () => {
  it('creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [11, 22];
    const arr3 = [111];
    const zipped = zip(arr1, arr2, arr3);

    expect(zipped).toHaveLength(3);

    expect(zipped[0]).toHaveLength(3);
    expect(zipped[0][0]).toBe(1);
    expect(zipped[0][1]).toBe(11);
    expect(zipped[0][2]).toBe(111);

    expect(zipped[1]).toHaveLength(3);
    expect(zipped[1][0]).toBe(2);
    expect(zipped[1][1]).toBe(22);
    expect(zipped[1][2]).toBe(undefined);

    expect(zipped[2]).toHaveLength(3);
    expect(zipped[2][0]).toBe(3);
    expect(zipped[2][1]).toBe(undefined);
    expect(zipped[2][2]).toBe(undefined);

    expect(Array.isArray(zip())).toBe(true);
    expect(zip()).toHaveLength(0);

    expect(() => {
      return zip({}, {});
    }).toThrow(new TypeError('Expected all arguments passed to be arrays'));
  });
});
