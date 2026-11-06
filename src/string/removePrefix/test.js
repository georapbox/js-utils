import { describe, expect, it } from 'vitest';
import { removePrefix } from './removePrefix.js';

describe('String/removePrefix', () => {
  it('removes a matching prefix', () => {
    expect(removePrefix('Hello world!', 'Hello ')).toBe('world!');
    expect(removePrefix('__foobar', '__')).toBe('foobar');
  });

  it('returns the original string when the prefix does not match', () => {
    expect(removePrefix('Hello world!', 'world')).toBe('Hello world!');
    expect(removePrefix('__foobar', '??')).toBe('__foobar');
  });

  it('removes only the first matching prefix', () => {
    expect(removePrefix('foofoo', 'foo')).toBe('foo');
    expect(removePrefix('abcabcabc', 'abc')).toBe('abcabc');
  });

  it('returns an empty string when the prefix matches the entire string', () => {
    expect(removePrefix('hello', 'hello')).toBe('');
  });

  it('handles empty strings', () => {
    expect(removePrefix('', '')).toBe('');
    expect(removePrefix('hello', '')).toBe('hello');
    expect(removePrefix('', 'hello')).toBe('');
  });

  it('matches prefixes case-sensitively', () => {
    expect(removePrefix('Hello world!', 'hello')).toBe('Hello world!');
    expect(removePrefix('Hello world!', 'Hello')).toBe(' world!');
  });

  it('supports Unicode characters and emojis', () => {
    expect(removePrefix('Καλημέρα κόσμε', 'Καλημέρα ')).toBe('κόσμε');
    expect(removePrefix('こんにちは世界', 'こんにちは')).toBe('世界');
    expect(removePrefix('😀Hello', '😀')).toBe('Hello');
    expect(removePrefix('👨‍👩‍👧‍👦Family', '👨‍👩‍👧‍👦')).toBe('Family');
  });

  it('matches Unicode representations exactly', () => {
    expect(removePrefix('\u00E9Hello', 'e\u0301')).toBe('\u00E9Hello');
    expect(removePrefix('\u00E9Hello', '\u00E9')).toBe('Hello');
  });

  it('throws a TypeError when the first argument is not a string', () => {
    for (const value of [undefined, null, 42, true, {}, []]) {
      expect(() => removePrefix(value, 'foo')).toThrow(new TypeError('Expected all arguments to be strings'));
    }
  });

  it('throws a TypeError when the prefix is not a string', () => {
    for (const prefix of [undefined, null, 42, true, {}, []]) {
      expect(() => removePrefix('foobar', prefix)).toThrow(new TypeError('Expected all arguments to be strings'));
    }
  });
});
