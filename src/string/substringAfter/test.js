import { describe, expect, it } from 'vitest';
import { substringAfter } from './substringAfter.js';

describe('String/substringAfter', () => {
  it('returns the substring after the first occurrence', () => {
    const str = 'LOREM_IPSUM DOLOR_SIT AMET';

    expect(substringAfter(str, '_')).toBe('IPSUM DOLOR_SIT AMET');
    expect(substringAfter(str, 'SIT ')).toBe('AMET');
  });

  it('returns the substring after the last occurrence', () => {
    const str = 'LOREM_IPSUM DOLOR_SIT AMET';

    expect(substringAfter(str, '_', true)).toBe('SIT AMET');
    expect(substringAfter('foo/bar/baz', '/', true)).toBe('baz');
  });

  it('returns the original string when the delimiter is not found', () => {
    expect(substringAfter('foo/bar/baz', '?')).toBe('foo/bar/baz');
    expect(substringAfter('foo/bar/baz', '?', true)).toBe('foo/bar/baz');
  });

  it('returns the original string when the delimiter is empty', () => {
    expect(substringAfter('foobar', '')).toBe('foobar');
    expect(substringAfter('foobar', '', true)).toBe('foobar');
  });

  it('returns an empty string when the delimiter is at the end', () => {
    expect(substringAfter('foobar', 'bar')).toBe('');
    expect(substringAfter('🍎🍐🍊', '🍊')).toBe('');
  });

  it('handles delimiters at the beginning of the string', () => {
    expect(substringAfter('foobar', 'foo')).toBe('bar');
    expect(substringAfter('/foo/bar', '/')).toBe('foo/bar');
  });

  it('matches delimiters case-sensitively', () => {
    expect(substringAfter('Hello World', 'world')).toBe('Hello World');
    expect(substringAfter('Hello World', 'Hello ')).toBe('World');
  });

  it('handles empty strings', () => {
    expect(substringAfter('', '')).toBe('');
    expect(substringAfter('', 'foo')).toBe('');
  });

  it('supports Unicode characters and emojis', () => {
    expect(substringAfter('Καλημέρα κόσμε', 'Καλημέρα ')).toBe('κόσμε');
    expect(substringAfter('こんにちは世界', 'こんにちは')).toBe('世界');
    expect(substringAfter('🍎🍐🍊🍌🍉', '🍊')).toBe('🍌🍉');
    expect(substringAfter('😀Hello😀World', '😀', true)).toBe('World');
  });

  it('matches Unicode representations exactly', () => {
    expect(substringAfter('café-world', 'e\u0301')).toBe('café-world');
    expect(substringAfter('café-world', '\u00E9')).toBe('-world');
  });

  it('throws a TypeError when the first argument is not a string', () => {
    for (const value of [undefined, null, 42, true, {}, []]) {
      expect(() => substringAfter(value, '/')).toThrow(
        new TypeError('Expected a string for first and second argument')
      );
    }
  });

  it('throws a TypeError when the delimiter is not a string', () => {
    for (const delimiter of [undefined, null, 42, true, {}, []]) {
      expect(() => substringAfter('foo/bar', delimiter)).toThrow(
        new TypeError('Expected a string for first and second argument')
      );
    }
  });
});
