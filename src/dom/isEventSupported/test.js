var isEventSupported = require('./isEventSupported');

describe('dom/isEventSupported', function () {
  it('checks if event is supported by browser', function () {
    expect(isEventSupported('submit')).toBe(true);

    expect(isEventSupported('click')).toBe(true);

    expect(isEventSupported('scroll')).toBe(true);

    expect(isEventSupported('scroll', window)).toBe(true);

    expect(isEventSupported('keyup')).toBe(true);

    expect(isEventSupported('keyup', document.createElement('input'))).toBe(true);

    expect(isEventSupported('something')).toBe(false);
  });
});
