import { describe, expect, it } from 'vitest';
import { escapeRegExp } from './escapeRegExp.js';

describe('String/escapeRegExp', () => {
  it('should RegExp special characters in string', () => {
    expect(escapeRegExp('[MDN](https://developer.mozilla.org/)')).toEqual(
      '\\[MDN\\]\\(https://developer\\.mozilla\\.org/\\)'
    );

    expect(escapeRegExp('*_* +_+ ...')).toEqual('\\*_\\* \\+_\\+ \\.\\.\\.');

    expect(() => {
      return escapeRegExp(null);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
