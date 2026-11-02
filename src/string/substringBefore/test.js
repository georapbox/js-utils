import { describe, expect, it } from 'vitest';
import { substringBefore } from './substringBefore.js';

describe('String/substringBefore', () => {
  it('should return a substring before a specific sequence of character(s)', () => {
    const str = 'LOREM_IPSUM DOLOR_SIT AMET';

    expect(substringBefore(str, 'SIT')).toEqual('LOREM_IPSUM DOLOR_');

    expect(substringBefore(str, 'sit ')).toBe(''); // test case sensitive

    expect(substringBefore(str, '_')).toBe('LOREM');

    expect(substringBefore(str, '_', true)).toEqual('LOREM_IPSUM DOLOR');

    expect(substringBefore(str, '???')).toBe(''); // test non-existent sub-string

    expect(substringBefore('🍎🍐🍊🍌🍉🍇🍓', '🍊')).toBe('🍎🍐');

    expect(substringBefore('🍎🍐🍊🍌🍉🍇🍓', '🍎')).toBe('');

    expect(() => {
      return substringBefore(null, 'hello');
    }).toThrow(new TypeError('Expected a string for first and second argument'));

    expect(() => {
      return substringBefore(str, null);
    }).toThrow(new TypeError('Expected a string for first and second argument'));
  });
});
