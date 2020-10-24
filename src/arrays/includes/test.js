var includes = require('./includes');

describe('Array/includes', function () {
  it('determines whether an array includes a certain element', function () {
    var obj;

    expect(includes([1, 2, 3], 2)).toBe(true);

    expect(includes([1, 2, 3], 4)).toBe(false);

    expect(includes([1, 2, 3], 3, 3)).toBe(false);

    expect(includes([1, 2, 3], 3, -1)).toBe(true);

    expect(includes([1, 2, NaN, 3], NaN)).toBe(true);

    expect(includes([1, 2, null], null)).toBe(true);

    expect(includes([1, 2, undefined])).toBe(true);

    expect(includes([1, 2, 0], 0)).toBe(true);

    expect(includes([1, 2, 0], -0)).toBe(true);

    obj = {foo: 'bar'};
    expect(includes([1, 2, obj, 0], obj)).toBe(true);

    expect(function () {
      return includes({foo: 'bar'}, 'bar');
    }).toThrow();
  });
});
