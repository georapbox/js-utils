const escapeRegExp = require('./escapeRegExp');

describe('String/escapeRegExp', () => {
  it('should RegExp special characters in string', () => {
    expect(escapeRegExp('[MDN](https://developer.mozilla.org/)')).toEqual('\\[MDN\\]\\(https://developer\\.mozilla\\.org/\\)');

    expect(escapeRegExp('*_* +_+ ...')).toEqual('\\*_\\* \\+_\\+ \\.\\.\\.');

    expect(() => {
      return escapeRegExp(null);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
