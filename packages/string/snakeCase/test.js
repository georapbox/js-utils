import { describe, expect, it } from 'vitest';
import { snakeCase } from './snakeCase.js';

describe('String/snake case', () => {
  it('should convert string to snake_case', () => {
    expect(snakeCase(' () @#$ @# %the quick brown fox jumps over the lazy dog  #!#$% <> ')).toBe(
      'the_quick_brown_fox_jumps_over_the_lazy_dog'
    );

    expect(snakeCase('the quick brown fox jumps over the lazy dog')).toBe(
      'the_quick_brown_fox_jumps_over_the_lazy_dog'
    );

    expect(snakeCase('the quick 😀 brown fox jumps over the lazy dog')).toBe(
      'the_quick_😀_brown_fox_jumps_over_the_lazy_dog'
    );

    expect(snakeCase('the-quick-brown-fox-jumps-over-the-lazy-dog')).toBe(
      'the_quick_brown_fox_jumps_over_the_lazy_dog'
    );

    expect(snakeCase('the_quick_brown_fox_jumps_over_the_lazy_dog')).toBe(
      'the_quick_brown_fox_jumps_over_the_lazy_dog'
    );

    expect(snakeCase('thequickbrownfoxjumpsoverthelazydog')).toBe('thequickbrownfoxjumpsoverthelazydog');

    expect(snakeCase('theQuickBrownFoxJumpsOverTheLazyDog')).toBe('the_quick_brown_fox_jumps_over_the_lazy_dog');

    expect(snakeCase('TheQuickBrownFoxJumpsOverTheLazyDog')).toBe('the_quick_brown_fox_jumps_over_the_lazy_dog');

    expect(snakeCase('The Quick Brown Fox Jumps Over The Lazy Dog')).toBe(
      'the_quick_brown_fox_jumps_over_the_lazy_dog'
    );

    expect(snakeCase('theQUICKBrownFoxJumpsOverTheLazyDog')).toBe('the_q_u_i_c_k_brown_fox_jumps_over_the_lazy_dog');

    expect(snakeCase('the - quick ( * brown# )fox:> < jumps; % over , the ^ lazy & dog')).toBe(
      'the_quick_brown_fox_jumps_over_the_lazy_dog'
    );

    expect(() => {
      return snakeCase(['the quick brown fox jumps over the lazy dog']);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
