import { describe, expect, it } from 'vitest';
import { substringBefore } from './substringBefore.js';

describe('String/substringBefore', () => {
  it('returns the substring before the first occurrence', () => {
    const str = 'LOREM_IPSUM DOLOR_SIT AMET';

    expect(substringBefore(str, '_')).toBe('LOREM');
    expect(substringBefore(str, 'SIT')).toBe('LOREM_IPSUM DOLOR_');
  });

  it('returns the substring before the last occurrence', () => {
    const str = 'LOREM_IPSUM DOLOR_SIT AMET';

    expect(substringBefore(str, '_', true)).toBe('LOREM_IPSUM DOLOR');
    expect(substringBefore('foo/bar/baz', '/', true)).toBe('foo/bar');
  });

  it('returns the original string when the delimiter is not found', () => {
    expect(substringBefore('foo/bar/baz', '?')).toBe('foo/bar/baz');
    expect(substringBefore('foo/bar/baz', '?', true)).toBe('foo/bar/baz');
  });

  it('returns the original string when the delimiter is empty', () => {
    expect(substringBefore('foobar', '')).toBe('foobar');
    expect(substringBefore('foobar', '', true)).toBe('foobar');
  });

  it('returns an empty string when the delimiter is at the beginning', () => {
    expect(substringBefore('foobar', 'foo')).toBe('');
    expect(substringBefore('🍎🍐🍊', '🍎')).toBe('');
  });

  it('handles delimiters at the end of the string', () => {
    expect(substringBefore('foobar', 'bar')).toBe('foo');
    expect(substringBefore('foobar', 'bar', true)).toBe('foo');
  });

  it('matches delimiters case-sensitively', () => {
    expect(substringBefore('Hello World', 'world')).toBe('Hello World');
    expect(substringBefore('Hello World', 'World')).toBe('Hello ');
  });

  it('handles empty strings', () => {
    expect(substringBefore('', '')).toBe('');
    expect(substringBefore('', 'foo')).toBe('');
  });

  it('supports Unicode characters and emojis', () => {
    expect(substringBefore('Καλημέρα κόσμε', ' κόσμε')).toBe('Καλημέρα');
    expect(substringBefore('こんにちは世界', '世界')).toBe('こんにちは');
    expect(substringBefore('🍎🍐🍊🍌🍉', '🍊')).toBe('🍎🍐');
    expect(substringBefore('😀Hello😀World', '😀', true)).toBe('😀Hello');
  });

  it('matches Unicode representations exactly', () => {
    expect(substringBefore('café-world', 'e\u0301')).toBe('café-world');
    expect(substringBefore('café-world', '\u00E9')).toBe('caf');
  });

  it('throws a TypeError when the first argument is not a string', () => {
    for (const value of [undefined, null, 42, true, {}, []]) {
      expect(() => substringBefore(value, '/')).toThrow(
        new TypeError('Expected a string for first and second argument')
      );
    }
  });

  it('throws a TypeError when the delimiter is not a string', () => {
    for (const delimiter of [undefined, null, 42, true, {}, []]) {
      expect(() => substringBefore('foo/bar', delimiter)).toThrow(
        new TypeError('Expected a string for first and second argument')
      );
    }
  });
});
