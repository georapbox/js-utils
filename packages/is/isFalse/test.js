const isFalse = require('./isFalse');

describe('is/isFalse', () => {
  it('checks if a value is false', () => {
    expect(isFalse(false)).toBe(true);

    expect(isFalse(true)).toBe(false);

    expect(isFalse()).toBe(false);
  });
});
