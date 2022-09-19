const curry = require('./curry.js');

describe('curry', () => {
  it('should return a curried function until all expected arguments are satisfied', () => {
    const add = curry((a, b, c) => a + b + c);
    const addOne = add(1);
    const addTwo = addOne(2);
    const res = addTwo(3);

    expect(res).toEqual(6);
  });

  it('providing arity when cannot be automatically calculated', () => {
    const add = curry((a = 0, ...args) => a + args[0] + args[1], 3);
    const addOne = add(1);
    const addTwo = addOne(2);
    const res = addTwo(3);

    expect(add.length).toBe(0);
    expect(res).toBe(6);
  });

  it('throws error if first argument is not function', () => {
    expect(() => {
      return curry(null);
    }).toThrow(new TypeError('Expected a function for first argument'));
  });

  it('throws error if second argument is not number', () => {
    expect(() => {
      return curry((a = 0, b = 1) => a + b, null);
    }).toThrow(new TypeError('Expected a number for second argument'));
  });
});
