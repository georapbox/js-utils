const unary = require('./unary.js');

describe('Function/unary', () => {
  const fn = (a, b) => [a, b];

  it('should create a function that accepts up to 1 argument, ignoring any additional arguments', () => {
    expect(unary(fn)()).toStrictEqual([void 0, void 0]);
    expect(unary(fn)('foo')).toStrictEqual(['foo', void 0]);
    expect(unary(fn)('foo', 'bar')).toStrictEqual(['foo', void 0]);
    expect(unary(fn)('foo', 'bar', 'baz')).toStrictEqual(['foo', void 0]);
  });

  it('should throw TypeError if first argument is not a function', () => {
    expect(() => {
      return unary();
    }).toThrow(new TypeError('Expected a function for first argument'));
  });
});
