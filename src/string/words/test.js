import { describe, expect, it } from 'vitest';
import { words } from './words.js';

describe('String/words', () => {
  it('extracts words from a string', () => {
    expect(words('Hello world')).toStrictEqual(['Hello', 'world']);
    expect(words('One two three')).toStrictEqual(['One', 'two', 'three']);
  });

  it('returns an empty array for empty or whitespace-only strings', () => {
    expect(words('')).toStrictEqual([]);
    expect(words('  \n\r\t\v  ')).toStrictEqual([]);
  });

  it('excludes punctuation and whitespace', () => {
    const str = 'Hello !@# world! \n This is a ^&* message \r from %#$% \v outter() \t space. 😀';

    expect(words(str)).toStrictEqual(['Hello', 'world', 'This', 'is', 'a', 'message', 'from', 'outter', 'space']);
  });

  it('extracts Greek words', () => {
    const str = '!@# \n Αυτό είναι ένα ^&* μήνυμα \r από %#$% \v το () μακρυνό \t διάστημα. 😀';

    expect(words(str, 'el')).toStrictEqual(['Αυτό', 'είναι', 'ένα', 'μήνυμα', 'από', 'το', 'μακρυνό', 'διάστημα']);
  });

  it('supports locale-specific word segmentation', () => {
    expect(words('Hello, world!', 'en')).toStrictEqual(['Hello', 'world']);

    expect(words('Καλημέρα κόσμε', 'el')).toStrictEqual(['Καλημέρα', 'κόσμε']);

    expect(words('こんにちは世界', 'ja')).toStrictEqual(['こんにちは', '世界']);
  });

  it('preserves apostrophes within words', () => {
    expect(words("Don't stop!", 'en')).toStrictEqual(["Don't", 'stop']);
  });

  it('does not split programming identifiers', () => {
    expect(words('helloWorld hello_world foo123bar', 'en')).toStrictEqual(['helloWorld', 'hello_world', 'foo123bar']);
  });

  it('returns an empty array for punctuation-only strings', () => {
    expect(words('!@# $%^ &*() [] {}')).toStrictEqual([]);
  });

  it('excludes emojis', () => {
    expect(words('Hello 😀 world')).toStrictEqual(['Hello', 'world']);

    expect(words('🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🥭')).toStrictEqual([]);
  });

  it('extracts numbers as word-like segments', () => {
    expect(words('1\t2\r3 4 5')).toStrictEqual(['1', '2', '3', '4', '5']);
  });

  it('throws a TypeError when the first argument is not a string', () => {
    for (const value of [undefined, null, 42, true, {}, []]) {
      expect(() => words(value)).toThrow(new TypeError('Expected a string for first argument'));
    }
  });

  it('throws a TypeError when the locale is not a string or undefined', () => {
    for (const value of [null, 42, true, {}, []]) {
      expect(() => words('Hello', value)).toThrow(new TypeError('Expected a string for second argument'));
    }
  });

  it('throws a RangeError for an invalid locale identifier', () => {
    expect(() => words('Hello', 'invalid_locale')).toThrow(RangeError);
  });

  it('accepts an undefined locale', () => {
    expect(words('Hello world', undefined)).toStrictEqual(['Hello', 'world']);
  });
});
