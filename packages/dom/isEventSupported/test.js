var isEventSupported = require('./isEventSupported');

describe('dom/isEventSupported', function () {
  it('checks if event is supported by browser', function () {
    expect(isEventSupported('click')).toBe(true);
    expect(isEventSupported('click', document.createElement('button'))).toBe(true);

    expect(isEventSupported('select')).toBe(true);
    expect(isEventSupported('select', document.createElement('input'))).toBe(true);

    expect(isEventSupported('change')).toBe(true);
    expect(isEventSupported('change', document.createElement('input'))).toBe(true);

    expect(isEventSupported('change')).toBe(true);
    expect(isEventSupported('change', document.createElement('input'))).toBe(true);

    expect(isEventSupported('submit')).toBe(true);
    expect(isEventSupported('submit', document.createElement('form'))).toBe(true);

    expect(isEventSupported('reset')).toBe(true);
    expect(isEventSupported('reset', document.createElement('form'))).toBe(true);

    expect(isEventSupported('error')).toBe(true);
    expect(isEventSupported('error', document.createElement('image'))).toBe(true);

    expect(isEventSupported('load')).toBe(true);
    expect(isEventSupported('load', document.createElement('image'))).toBe(true);

    expect(isEventSupported('abort')).toBe(true);
    expect(isEventSupported('abort', document.createElement('image'))).toBe(true);

    expect(isEventSupported('scroll')).toBe(true);
    expect(isEventSupported('scroll', window)).toBe(true);

    expect(isEventSupported('keyup')).toBe(true);
    expect(isEventSupported('keyup', document.createElement('input'))).toBe(true);

    expect(isEventSupported('something')).toBe(false);

    expect(function () {
      return isEventSupported({});
    }).toThrow('Expected a string for first argument');
  });
});
