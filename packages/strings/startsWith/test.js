var startsWith = require('./startsWith');

describe('String/startsWith', function () {
  function runTests() {
    expect(startsWith('Hello world', 'Hello')).toBe(true);

    expect(startsWith('Hello world', 'world')).toBe(false);

    expect(startsWith('Hello world', 'ello', 1)).toBe(true);

    expect(startsWith('Hello world')).toBe(false);

    expect(startsWith('Hello world', null)).toBe(false);

    expect(startsWith('🍏 🍎 🍐 🍊 🍋', '🍏')).toBe(true);

    expect(startsWith('🍏 🍎 🍐 🍊 🍋', '🍎')).toBe(false);

    expect(function () {
      return startsWith(123455, '123');
    }).toThrow(new TypeError('Expected a string for first argument'));
  }

  it('checks if subject string starts with string specified (String.prototype.startsWith is supported)', function () {
    runTests();
  });

  it('checks if subject string starts with string specified (String.prototype.startsWith is not supported)', function () {
    var nativeCode = String.prototype.startsWith;
    String.prototype.startsWith = null;
    runTests();
    String.prototype.startsWith = nativeCode;
  });
});
