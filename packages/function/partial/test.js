var partial = require('./partial.js');

describe('Function/partial', function () {
  it('partially applies provided function to its arguments', function () {
    var add = function (a, b, c) {
      return a + b + c;
    };
    var p1 = partial(add, 1);
    expect(p1(2, 3)).toBe(6);

    var p2 = partial(add, 10, 20);
    expect(p2(30)).toBe(60);

    var p3 = partial(add, 100, 200, 300);
    expect(p3()).toBe(600);

    var p4 = partial(add);
    expect(p4(5, 10, 15)).toBe(30);
  });

  it('providing more arguments than expected in the newly created function should have no effect', function () {
    var add = (a, b) => a + b;
    var p1 = partial(add, 1);
    expect(p1(2, 4, 5, 6)).toBe(3);

    var noop = () => void 0;
    var p2 = partial(noop, 'foo', 'bar');
    expect(p2()).toBeUndefined();
  });

  it('throws if first argument is not a function', function () {
    expect(function () {
      return partial(null, 'foo', 'bar');
    }).toThrow(new TypeError('Expected a function for first argument'));
  });
});
