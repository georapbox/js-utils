var replaceAll = require('./replaceAll');

describe('String/replaceAll', function () {
  it('should replace all occurrences of a string with a given substring', function () {
    expect(replaceAll('The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?', 'dog', 'ferret'))
      .toBe('The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?');

    expect(replaceAll('The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?', '.', '!'))
      .toBe('The quick brown fox jumps over the lazy dog! If the dog reacted, was it really lazy?');

    expect(replaceAll('The quick brown fox jumps over the lazy dog.', ' ', '-'))
      .toBe('The-quick-brown-fox-jumps-over-the-lazy-dog.');

    expect(
      replaceAll(replaceAll('The quick brown fox jumps \rover the lazy dog.', ' ', '-'), '\r', '')
    ).toBe('The-quick-brown-fox-jumps-over-the-lazy-dog.');

    expect(replaceAll('The quick brown fox jumps over the lazy DOG. If the dog reacted, was it really lazy?', 'dog', 'ferret', true))
      .toBe('The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?');

    expect(replaceAll('The quick brown\tfox jumps\tover the lazy dog.', '\t', ' '))
      .toBe('The quick brown fox jumps over the lazy dog.');

    expect(function () {
      return replaceAll('The quick brown fox jumps over the lazy dog.', {}, '*');
    }).toThrow('Expected a string for the first three arguments');

    expect(function () {
      return replaceAll('The quick brown fox jumps over the lazy dog.', 'Lorem', {});
    }).toThrow('Expected a string for the first three arguments');

    expect(function () {
      return replaceAll({}, 'The quick brown fox jumps over the lazy dog.', '*');
    }).toThrow('Expected a string for the first three arguments');
  });
});
