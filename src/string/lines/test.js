import { describe, expect, it } from 'vitest';
import { lines } from './lines.js';

describe('String/lines', () => {
  it('splits strings using LF line endings', () => {
    expect(lines('foo\nbar\nbaz')).toStrictEqual(['foo', 'bar', 'baz']);
  });

  it('splits strings using CRLF line endings', () => {
    expect(lines('foo\r\nbar\r\nbaz')).toStrictEqual(['foo', 'bar', 'baz']);
  });

  it('splits strings using CR line endings', () => {
    expect(lines('foo\rbar\rbaz')).toStrictEqual(['foo', 'bar', 'baz']);
  });

  it('splits strings using Unicode line and paragraph separators', () => {
    expect(lines('foo\u2028bar\u2029baz')).toStrictEqual(['foo', 'bar', 'baz']);
  });

  it('handles mixed line endings', () => {
    const str = 'foo\nbar\r\nbaz\rqux\u2028quux\u2029corge';

    expect(lines(str)).toStrictEqual(['foo', 'bar', 'baz', 'qux', 'quux', 'corge']);
  });

  it('preserves empty lines between consecutive line endings', () => {
    expect(lines('foo\n\nbar')).toStrictEqual(['foo', '', 'bar']);
    expect(lines('foo\r\n\r\nbar')).toStrictEqual(['foo', '', 'bar']);
  });

  it('preserves empty lines at the beginning and end', () => {
    expect(lines('\nfoo\n')).toStrictEqual(['', 'foo', '']);
    expect(lines('\r\nfoo\r\n')).toStrictEqual(['', 'foo', '']);
  });

  it('returns an array containing an empty string for empty input', () => {
    expect(lines('')).toStrictEqual(['']);
  });

  it('returns a single-element array when no line endings are present', () => {
    expect(lines('hello world')).toStrictEqual(['hello world']);
  });

  it('preserves whitespace within lines', () => {
    expect(lines('  foo  \n\tbar\t')).toStrictEqual(['  foo  ', '\tbar\t']);
  });

  it('preserves Unicode characters and emojis', () => {
    expect(lines('Καλημέρα\nこんにちは\r\n😀 Hello')).toStrictEqual(['Καλημέρα', 'こんにちは', '😀 Hello']);
  });

  it('does not split on other invisible characters', () => {
    expect(lines('foo\u200Bbar\u00A0baz')).toStrictEqual(['foo\u200Bbar\u00A0baz']);
  });

  it('throws a TypeError when the argument is not a string', () => {
    for (const value of [undefined, null, 42, true, {}, []]) {
      expect(() => lines(value)).toThrow(new TypeError('Expected a string for first argument'));
    }
  });
});
