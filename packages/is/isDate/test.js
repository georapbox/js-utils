const isDate = require('./isDate');

describe('is/isDate', () => {
  it('checks if a value is Date object', () => {
    expect(isDate(new Date())).toBe(true);

    expect(isDate(new Date().getTime())).toBe(false);
  });
});
