import { describe, expect, it } from 'vitest';
import { upperFirst } from './upperFirst.js';

describe('String/upperFirst', () => {
  it('uppercases the first character of a string', () => {
    expect(upperFirst('hello')).toBe('Hello');
    expect(upperFirst('καλημέρα')).toBe('Καλημέρα');
    expect(upperFirst('привет')).toBe('Привет');
  });

  it('preserves the remaining characters', () => {
    expect(upperFirst('hElLo')).toBe('HElLo');
    expect(upperFirst('HELLO')).toBe('HELLO');
  });

  it('supports lowercasing the string before capitalization', () => {
    expect(upperFirst('hElLo'.toLowerCase())).toBe('Hello');
  });

  it('handles Unicode characters outside the Basic Multilingual Plane', () => {
    expect(upperFirst('𐐨ello')).toBe('𐐀ello');
  });

  it('preserves combining marks', () => {
    expect(upperFirst('e\u0301tude')).toBe('E\u0301tude');
  });

  it('handles characters without uppercase equivalents', () => {
    expect(upperFirst('你好')).toBe('你好');
    expect(upperFirst('こんにちは')).toBe('こんにちは');
    expect(upperFirst('😀hello')).toBe('😀hello');
  });

  it('handles uppercase mappings that expand into multiple characters', () => {
    expect(upperFirst('ßeta')).toBe('SSeta');
  });

  it('returns an empty string for empty input', () => {
    expect(upperFirst('')).toBe('');
  });

  it('throws a TypeError when the argument is not a string', () => {
    for (const value of [undefined, null, 12345, true, {}, []]) {
      expect(() => upperFirst(value)).toThrow(new TypeError('Expected a string for first argument'));
    }
  });
});
