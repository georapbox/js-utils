var isFunction = require('./isFunction');

describe('is/isFunction', function () {
  it('checks if a value is function', function () {
    function noop() {}

    expect(isFunction(noop)).toBe(true);

    expect(isFunction({ foo: 'bar' })).toBe(false);

    expect(isFunction([1, 2, 3])).toBe(false);

    expect(isFunction(noop())).toBe(false);
  });
});
