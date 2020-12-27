var debounce = require('./debounce');

describe('Function/debounce', function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

  it('debounces a function; triggers the function on the trailing edge', function () {
    var func = jest.fn();
    var delay = 1000; // ms
    var debouncedFunc = debounce(func, delay);

    // Call it immediately
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(0);

    // Call it several times with 500ms (< 1000ms) between each call
    for (var i = 0; i < 5; i += 1) {
      jest.advanceTimersByTime(500);
      debouncedFunc();
    }

    expect(func).toHaveBeenCalledTimes(0);

    // Fast forward time
    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('debounces a function; triggers the function on the leading edge', function () {
    var func = jest.fn();
    var delay = 1000; // ms
    var debouncedFunc = debounce(func, delay, true);

    // Call it immediately
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    // Call it several times with 500ms (< 1000ms) between each call
    for (var i = 0; i < 5; i += 1) {
      jest.advanceTimersByTime(500);
      debouncedFunc();
    }

    expect(func).toHaveBeenCalledTimes(1);

    // Fast forward time
    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('throws if first argument is not a function', function () {
    expect(function () {
      return debounce();
    }).toThrow(new TypeError('Expected a function for first argument'));
  });
});
