var ary = require('./ary.js');

describe('Function/ary', function () {
  var fn = function (a, b) {
    return [a, b];
  };

  it('should create a function that accepts up to 1 argument, ignoring any additional arguments', function () {
    expect(ary(fn, 1)()).toStrictEqual([void 0, void 0]);
    expect(ary(fn, 1)('foo', 'bar')).toStrictEqual(['foo', void 0]);
    expect(ary(fn, 1)('foo', 'bar', 'baz')).toStrictEqual(['foo', void 0]);
  });

  it('should create a function that accepts up to 2 arguments, ignoring any additional arguments', function () {
    expect(ary(fn, 2)()).toStrictEqual([void 0, void 0]);
    expect(ary(fn, 2)('foo', 'bar')).toStrictEqual(['foo', 'bar']);
    expect(ary(fn, 2)('foo', 'bar', 'baz')).toStrictEqual(['foo', 'bar']);
  });

  it('should create a function that accepts 0 arguments, ignoring any additional arguments', function () {
    expect(ary(fn, 0)()).toStrictEqual([void 0, void 0]);
    expect(ary(fn, 0)('foo', 'bar')).toStrictEqual([void 0, void 0]);
    expect(ary(fn, 0)('foo', 'bar', 'baz')).toStrictEqual([void 0, void 0]);

    expect(ary(fn, -0)()).toStrictEqual([void 0, void 0]);
    expect(ary(fn, -0)('foo', 'bar')).toStrictEqual([void 0, void 0]);
    expect(ary(fn, -0)('foo', 'bar', 'baz')).toStrictEqual([void 0, void 0]);
  });

  it('should create a function that accepts 0 arguments if arity cap is a negative number', function () {
    expect(ary(fn, -1)()).toStrictEqual([void 0, void 0]);
    expect(ary(fn, -1)('foo', 'bar')).toStrictEqual([void 0, void 0]);
    expect(ary(fn, -1)('foo', 'bar', 'baz')).toStrictEqual([void 0, void 0]);
  });

  it('should create a function that accepts 0 arguments if arity cap is `NaN`', function () {
    expect(ary(fn, NaN)()).toStrictEqual([void 0, void 0]);
    expect(ary(fn, NaN)('foo', 'bar')).toStrictEqual([void 0, void 0]);
    expect(ary(fn, NaN)('foo', 'bar', 'baz')).toStrictEqual([void 0, void 0]);
  });

  it('should throw TypeError if first argument is not a function', function () {
    expect(function () {
      return ary();
    }).toThrow(new TypeError('Expected a function for first argument'));
  });

  it('should throw TypeError if second argument is not a number', function () {
    expect(function () {
      return ary(fn);
    }).toThrow(new TypeError('Expected a number for second argument'));
  });
});
