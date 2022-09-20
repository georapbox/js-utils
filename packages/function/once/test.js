const once = require('./once');

describe('Function/once', () => {
  it('should execute a function only one time', () => {
    const fn = jest.fn();
    const canOnlyFireOnce = once(fn);

    canOnlyFireOnce('foo');
    canOnlyFireOnce('bar');

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('foo');

    expect(() => {
      once(null)();
    }).toThrow(new TypeError('Expected a function for first argument'));
  });
});
