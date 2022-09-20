const randomInt = require('./randomInt');

describe('Math/randomInt', () => {
  it('returns a pseudo-random integer number between a min (inclusive) and a max (inclusive) value.', () => {
    const r0 = randomInt(0, 2);
    const r1 = randomInt(2, 0);

    expect(r0 >= 0 && r0 <= 2).toBe(true);

    expect(r1 >= 0 && r1 <= 2).toBe(true);

    expect(() => {
      return randomInt();
    }).toThrow(new TypeError('Expected all arguments to be numbers'));
  });
});
