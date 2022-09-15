const throttle = require('./throttle');

describe('Function/throttle', function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

  it('limits the number of times a function can be called in a given period', function () {
    const func = jest.fn();

    const throttled = throttle(func);

    throttled();
    throttled();

    expect(setTimeout).toHaveBeenCalledTimes(1);

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(200);

    throttled();

    expect(setTimeout).toHaveBeenCalledTimes(2);
  });

  it('throws if first argument is not a function', function () {
    expect(function () {
      return throttle();
    }).toThrow(new TypeError('Expected a function for first argument'));
  });
});
