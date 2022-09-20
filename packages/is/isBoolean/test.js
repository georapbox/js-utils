const isBoolean = require('./isBoolean');

describe('is/isBoolean', () => {
  it('checks if a value is boolean', () => {
    expect(isBoolean(true)).toBe(true);

    expect(isBoolean(100)).toBe(false);
  });
});
