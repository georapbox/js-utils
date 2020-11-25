var unary = require('./unary.js');

describe('Function/unary', function () {
  it('creates a function that accepts up to one argument, ignoring any additional arguments', function () {
    var mockFn = jest.fn().mockImplementation(function (a, b) {
      return [a, b];
    });

    mockFn('foo', 'bar');
    expect(mockFn).toHaveBeenCalledWith('foo', 'bar');

    var result = unary(mockFn)('foo');
    expect(mockFn).toHaveBeenCalledWith('foo');
    expect(result).toStrictEqual(['foo', void 0]);

    var result2 = unary(mockFn)('foo', 'bar', 'baz'); // pass extra arguments to test that onlu the first one is used
    expect(mockFn).toHaveBeenCalledWith('foo');
    expect(result2).toStrictEqual(['foo', void 0]);

    expect(function () {
      return unary();
    }).toThrow('Expected a function for first argument');
  });
});
