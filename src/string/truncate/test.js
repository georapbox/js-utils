import { describe, expect, it } from 'vitest';
import { truncate } from './truncate.js';

describe('String/truncate', () => {
  it('truncates a string to the specified character count', () => {
    expect(truncate('Hello world', 5)).toBe('Hello');
    expect(truncate('Hello world', 3.7)).toBe('Hel');
  });

  it('appends the suffix when truncation occurs', () => {
    expect(truncate('Hello world', 5, '...')).toBe('Hello...');
    expect(truncate('Hello world', 5, '---')).toBe('Hello---');
  });

  it('does not include the suffix in the character count', () => {
    expect(truncate('Hello world', 5, '...')).toBe('Hello...');
  });

  it('returns the original string when truncation is unnecessary', () => {
    expect(truncate('Hello', 5, '...')).toBe('Hello');
    expect(truncate('Hello', 10, '...')).toBe('Hello');
    expect(truncate('', 0, '...')).toBe('');
  });

  it('handles a character count of zero', () => {
    expect(truncate('Hello', 0)).toBe('');
    expect(truncate('Hello', 0, '...')).toBe('...');
  });

  it('returns the original string for negative or non-finite counts', () => {
    expect(truncate('Hello', -1, '...')).toBe('Hello');
    expect(truncate('Hello', NaN, '...')).toBe('Hello');
    expect(truncate('Hello', Infinity, '...')).toBe('Hello');
    expect(truncate('Hello', -Infinity, '...')).toBe('Hello');
  });

  it('preserves complete emoji sequences', () => {
    expect(truncate('👩‍💻 Hello', 1, '...')).toBe('👩‍💻...');
    expect(truncate('👨‍👩‍👧‍👦 Family', 1, '...')).toBe('👨‍👩‍👧‍👦...');
  });

  it('preserves complete flag emojis', () => {
    expect(truncate('🇬🇷 Greece', 1, '...')).toBe('🇬🇷...');
  });

  it('preserves characters with combining marks', () => {
    expect(truncate('e\u0301clair', 1, '...')).toBe('e\u0301...');
  });

  it('preserves whitespace when truncating', () => {
    expect(truncate('Hello world', 6, '...')).toBe('Hello ...');
    expect(truncate('Hello\nworld', 6, '...')).toBe('Hello\n...');
  });

  it('treats HTML markup as plain text', () => {
    expect(truncate('<strong>Hello</strong>', 5, '...')).toBe('<stro...');
  });

  it('throws a TypeError when the first argument is not a string', () => {
    for (const value of [undefined, null, 42, true, {}, []]) {
      expect(() => truncate(value, 5)).toThrow(new TypeError('Expected a string for first argument'));
    }
  });

  it('throws a TypeError when the second argument is not a number', () => {
    for (const value of [undefined, null, '5', true, {}, []]) {
      expect(() => truncate('Hello', value)).toThrow(new TypeError('Expected a number for second argument'));
    }
  });

  it('throws a TypeError when the suffix is not a string', () => {
    for (const value of [null, 5, true, {}, []]) {
      expect(() => truncate('Hello', 3, value)).toThrow(new TypeError('Expected a string for third argument'));
    }
  });
});
