import { describe, expect, it } from 'vitest';
import { removePunctuation } from './removePunctuation.js';

describe('String/removePunctuation', () => {
  it('removes common punctuation characters', () => {
    expect(removePunctuation('Hello, world! How are you?')).toBe('Hello world How are you');
  });

  it('removes quotes and apostrophes', () => {
    expect(removePunctuation(`"Don't" say 'never'.`)).toBe('Dont say never');
  });

  it('removes brackets and parentheses', () => {
    expect(removePunctuation('Hello (world) [again] {today}')).toBe('Hello world again today');
  });

  it('removes dashes and underscores', () => {
    expect(removePunctuation('hello-world_123—again')).toBe('helloworld123again');
  });

  it('removes punctuation from other languages', () => {
    expect(removePunctuation('你好，世界！')).toBe('你好世界');
    expect(removePunctuation('こんにちは、世界。')).toBe('こんにちは世界');
    expect(removePunctuation('Γεια σου! Πώς είσαι;')).toBe('Γεια σου Πώς είσαι');
  });

  it('preserves symbols and currency signs', () => {
    expect(removePunctuation('Price: $50 + €20 = $70!')).toBe('Price $50 + €20 = $70');
  });

  it('preserves emojis', () => {
    expect(removePunctuation('Hello 😀! ❤️ World!')).toBe('Hello 😀 ❤️ World');
  });

  it('preserves whitespace', () => {
    expect(removePunctuation('  Hello,   world!\n\t')).toBe('  Hello   world\n\t');
  });

  it('joins text separated only by punctuation', () => {
    expect(removePunctuation('hello-world')).toBe('helloworld');
    expect(removePunctuation('foo_bar')).toBe('foobar');
  });

  it('returns the original string when no punctuation is present', () => {
    expect(removePunctuation('Hello world 123')).toBe('Hello world 123');
  });

  it('returns an empty string for empty input', () => {
    expect(removePunctuation('')).toBe('');
  });

  it('returns an empty string for punctuation-only input', () => {
    expect(removePunctuation('!?.,;:()[]{}')).toBe('');
  });

  it('throws a TypeError when the argument is not a string', () => {
    for (const value of [undefined, null, 42, true, {}, []]) {
      expect(() => removePunctuation(value)).toThrow(new TypeError('Expected a string for first argument'));
    }
  });
});
