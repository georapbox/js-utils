describe('Function/after', function () {
  it('should invoke a function after it\'s been called 6 times', function () {
    var count = 0,
      result;

    var doSomething = after(5, function () {
      return count += 1;
    });

    var i = 0;

    for (i = 0; i < 10; i += 1) {
      result = doSomething();
    }

    expect(result).toEqual(6);
  });

  it('function is never invoked', function () {
    var count = 0,
      x = 0,
      result;

    var doSomething = after('five', function () {
      return count += 1;
    });

    for (x = 0; x < 10; x += 1) {
      result = doSomething();
    }

    expect(result).toBeUndefined();
  });
});
