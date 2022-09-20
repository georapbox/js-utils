const partial = require('./partial.js');

describe('partial', () => {
  it('partially applies provided function to its arguments', () => {
    const add = (a, b, c) => a + b + c;
    const p1 = partial(add, 1);
    expect(p1(2, 3)).toBe(6);

    const p2 = partial(add, 10, 20);
    expect(p2(30)).toBe(60);

    const p3 = partial(add, 100, 200, 300);
    expect(p3()).toBe(600);

    const p4 = partial(add);
    expect(p4(5, 10, 15)).toBe(30);
  });

  it('providing more arguments than expected in the newly created function should have no effect', () => {
    const add = (a, b) => a + b;
    const p1 = partial(add, 1);
    expect(p1(2, 4, 5, 6)).toBe(3);

    const noop = () => void 0;
    const p2 = partial(noop, 'foo', 'bar');
    expect(p2()).toBeUndefined();
  });

  it('throws error if argument is not function', () => {
    expect(() => {
      return partial(null);
    }).toThrow(new TypeError('Expected a function for first argument'));
  });
});
