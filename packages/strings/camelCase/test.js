const camelCase = require('./camelCase');

describe('String/camel case', () => {
  it('should convert string to camelCase', () => {
    expect(camelCase(' () @#$ @# @the quick brown fox jumps over the lazy dog  #!#$% <> ')).toBe('theQuickBrownFoxJumpsOverTheLazyDog');

    expect(camelCase('the quick brown fox jumps over the lazy dog')).toBe('theQuickBrownFoxJumpsOverTheLazyDog');

    expect(camelCase('the quick 😀 brown fox jumps over the lazy dog')).toBe('theQuick😀BrownFoxJumpsOverTheLazyDog');

    expect(camelCase('the-quick-brown-fox-jumps-over-the-lazy-dog')).toBe('theQuickBrownFoxJumpsOverTheLazyDog');

    expect(camelCase('the_quick_brown_fox_jumps_over_the_lazy_dog')).toBe('theQuickBrownFoxJumpsOverTheLazyDog');

    expect(camelCase('thequickbrownfoxjumpsoverthelazydog')).toBe('thequickbrownfoxjumpsoverthelazydog');

    expect(camelCase('theQuickBrownFoxJumpsOverTheLazyDog')).toBe('theQuickBrownFoxJumpsOverTheLazyDog');

    expect(camelCase('TheQuickBrownFoxJumpsOverTheLazyDog')).toBe('theQuickBrownFoxJumpsOverTheLazyDog');

    expect(camelCase('The Quick Brown Fox Jumps Over The Lazy Dog')).toBe('theQuickBrownFoxJumpsOverTheLazyDog');

    expect(camelCase('theQUICKBrownFoxJumpsOverTheLazyDog')).toBe('theQUICKBrownFoxJumpsOverTheLazyDog');

    expect(camelCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog')).toBe('theQuickBrownFoxJumpsOverTheLazyDog');

    expect(() => {
      return camelCase(['the quick brown fox jumps over the lazy dog']);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
