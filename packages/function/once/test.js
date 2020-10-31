var once = require('./once');

describe('Function/once', function () {
  it('should execute a function only one time', function () {
    var num = 0;
    var canOnlyFireOnce = once(function () {
      return num += 1;
    });

    expect(canOnlyFireOnce()).toBe(1);

    expect(canOnlyFireOnce()).toBe(1);

    expect(function () {
      once(null)();
    }).toThrow('Expected a function for first argument');
  });
});
