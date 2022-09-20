const normalize = require('./normalize');

describe('Math/normalize', function () {
  it('converts a numeical value from 0 to 1 indicating where it lies within a range of values', function () {
    expect(normalize(23, 0, 33)).toBe(0.696969696969697);

    expect(normalize(23, 5, 33)).toBe(0.6428571428571429);

    expect(normalize(35, 0, 33)).toBe(1.0606060606060606);

    expect(normalize(-1, 0, 33)).toBe(-0.030303030303030304);

    expect(normalize(33, -5, 33)).toBe(1);

    expect(normalize(-5, -5, 33)).toBe(0);

    expect(function () {
      return normalize(null, 0, 33);
    }).toThrow(new TypeError('Expected all arguments to be numbers'));

    expect(function () {
      return normalize(23, null, 33);
    }).toThrow(new TypeError('Expected all arguments to be numbers'));

    expect(function () {
      return normalize(23, 0, null);
    }).toThrow(new TypeError('Expected all arguments to be numbers'));
  });
});
