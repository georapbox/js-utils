const isFunction = require('./isFunction');

describe('is/isFunction', () => {
  it('checks if a value is function', () => {
    function func() {
      return true;
    }

    async function asyncFunc() {
      return Promise.resolve(true);
    }

    function *genFunc() {
      yield true;
    }

    expect(isFunction(func)).toBe(true);
    expect(isFunction(asyncFunc)).toBe(true);
    expect(isFunction(genFunc)).toBe(true);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction({ foo: 'bar' })).toBe(false);
    expect(isFunction([1, 2, 3])).toBe(false);
    expect(isFunction('foo')).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(void 0)).toBe(false);
    expect(isFunction(new Set())).toBe(false);
    expect(isFunction(new Map())).toBe(false);
    expect(isFunction(Symbol('foo'))).toBe(false);
  });
});
