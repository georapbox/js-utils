const inRange = require('./inRange');

describe('Math/inRange', () => {
  it('should test if number is in range', () => {
    expect(inRange(3, 2, 4)).toBe(true);

    expect(inRange(3, 4, 2)).toBe(true);

    expect(inRange(-3, -2, -6)).toBe(true);

    expect(inRange(4, 8, 2)).toBe(true);

    expect(inRange(4.5, 8.2, 2.1)).toBe(true);

    expect(() => {
      return inRange('4.5', '8.2', '2.1');
    }).toThrow(new TypeError('Expected all arguments to be numbers'));

    expect(() => {
      return inRange(4, 'b8', 'c2');
    }).toThrow(new TypeError('Expected all arguments to be numbers'));
  });
});
