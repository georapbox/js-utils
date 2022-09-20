const after = require('./after');

describe('Function/after', () => {
  it('should invoke a function after it\'s been called n times', () => {
    let count = 0;
    let result;

    const doSomething = after(5, x => count += x);

    for (let i = 0; i < 10; i += 1) {
      result = doSomething(1);
    }

    expect(result).toEqual(6);

    expect(() => {
      return after('five', () => {
        return count += 1;
      });
    }).toThrow(new TypeError('Expected a number for first argument'));

    expect(() => {
      return after(5);
    }).toThrow(new TypeError('Expected a function for second argument'));
  });
});
