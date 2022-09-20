const kebabCase = require('./kebabCase');

describe('String/kebabCase', () => {
  it('should convert string to kebab case', () => {
    expect(kebabCase(' () @#$ @# %the quick brown fox jumps over the lazy dog  #!#$% <> ')).toBe('the-quick-brown-fox-jumps-over-the-lazy-dog');

    expect(kebabCase('the quick brown fox jumps over the lazy dog')).toBe('the-quick-brown-fox-jumps-over-the-lazy-dog');

    expect(kebabCase('   the quick brown fox jumps over the lazy dog   ')).toBe('the-quick-brown-fox-jumps-over-the-lazy-dog');

    expect(kebabCase('the quick 😀 brown fox jumps over the lazy dog')).toBe('the-quick-😀-brown-fox-jumps-over-the-lazy-dog');

    expect(kebabCase('The Quick Brown Fox Jumps Over The Lazy Dog')).toBe('the-quick-brown-fox-jumps-over-the-lazy-dog');

    expect(kebabCase('the-quick-brown-fox-jumps-over-the-lazy-dog')).toBe('the-quick-brown-fox-jumps-over-the-lazy-dog');

    expect(kebabCase('the_quick_brown_fox_jumps_over_the_lazy_dog')).toBe('the-quick-brown-fox-jumps-over-the-lazy-dog');

    expect(kebabCase('thequickbrownfoxjumpsoverthelazydog')).toBe('thequickbrownfoxjumpsoverthelazydog');

    expect(kebabCase('theQuickBrownFoxJumpsOverTheLazyDog')).toBe('the-quick-brown-fox-jumps-over-the-lazy-dog');

    expect(kebabCase('TheQuickBrownFoxJumpsOverTheLazyDog')).toBe('the-quick-brown-fox-jumps-over-the-lazy-dog');

    expect(kebabCase('The Quick Brown Fox Jumps Over The Lazy Dog')).toBe('the-quick-brown-fox-jumps-over-the-lazy-dog');

    expect(kebabCase('theQUICKBrownFoxJumpsOverTheLazyDog')).toBe('the-q-u-i-c-k-brown-fox-jumps-over-the-lazy-dog');

    expect(kebabCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog')).toBe('the-quick-brown-fox-jumps-over-the-lazy-dog');

    expect(() => {
      return kebabCase(['the quick brown fox jumps over the lazy dog']);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
