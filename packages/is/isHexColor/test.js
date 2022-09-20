const isHexColor = require('./isHexColor');

describe('is/isHexColor', () => {
  it('checks if a value matches a hexadecimal color regular expression', () => {
    expect(isHexColor('#f5f5f5')).toBe(true);

    expect(isHexColor('#9c0')).toBe(true);

    expect(isHexColor('something')).toBe(false);

    expect(isHexColor(333)).toBe(true);

    expect(isHexColor('333')).toBe(true);

    expect(isHexColor(6.6)).toBe(false);

    expect(isHexColor()).toBe(false);

    expect(isHexColor(null)).toBe(false);
  });
});
