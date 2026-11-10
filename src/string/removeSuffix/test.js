import { describe, expect, it } from 'vitest';
import { removeSuffix } from './removeSuffix.js';

describe('String/removeSuffix', () => {
  it('removes a matching suffix', () => {
    expect(removeSuffix('Hello world!', 'world!')).toBe('Hello ');
    expect(removeSuffix('foobar__', '__')).toBe('foobar');
  });

  it('returns the original string when the suffix does not match', () => {
    expect(removeSuffix('Hello world!', 'Hello')).toBe('Hello world!');
    expect(removeSuffix('foobar__', '??')).toBe('foobar__');
  });

  it('removes only the last matching suffix', () => {
    expect(removeSuffix('foofoo', 'foo')).toBe('foo');
    expect(removeSuffix('abcabcabc', 'abc')).toBe('abcabc');
  });

  it('returns an empty string when the suffix matches the entire string', () => {
    expect(removeSuffix('hello', 'hello')).toBe('');
  });

  it('handles empty strings', () => {
    expect(removeSuffix('', '')).toBe('');
    expect(removeSuffix('hello', '')).toBe('hello');
    expect(removeSuffix('', 'hello')).toBe('');
  });

  it('matches suffixes case-sensitively', () => {
    expect(removeSuffix('Hello World', 'world')).toBe('Hello World');
    expect(removeSuffix('Hello World', 'World')).toBe('Hello ');
  });

  it('supports Unicode characters and emojis', () => {
    expect(removeSuffix('Καλημέρα κόσμε', ' κόσμε')).toBe('Καλημέρα');
    expect(removeSuffix('こんにちは世界', '世界')).toBe('こんにちは');
    expect(removeSuffix('Hello😀', '😀')).toBe('Hello');
    expect(removeSuffix('Family👨‍👩‍👧‍👦', '👨‍👩‍👧‍👦')).toBe('Family');
  });

  it('matches Unicode representations exactly', () => {
    expect(removeSuffix('Hello\u00E9', 'e\u0301')).toBe('Hello\u00E9');
    expect(removeSuffix('Hello\u00E9', '\u00E9')).toBe('Hello');
  });

  it('throws a TypeError when the first argument is not a string', () => {
    for (const value of [undefined, null, 42, true, {}, []]) {
      expect(() => removeSuffix(value, 'foo')).toThrow(new TypeError('Expected all arguments to be strings'));
    }
  });

  it('throws a TypeError when the suffix is not a string', () => {
    for (const suffix of [undefined, null, 42, true, {}, []]) {
      expect(() => removeSuffix('foobar', suffix)).toThrow(new TypeError('Expected all arguments to be strings'));
    }
  });
});
