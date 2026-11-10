import { describe, expect, it } from 'vitest';
import { unescapeHTML } from './unescapeHTML.js';

describe('String/unescapeHTML', () => {
  it('unescapes the supported HTML entities', () => {
    expect(unescapeHTML('&amp;&lt;&gt;&quot;&#34;&#39;')).toBe('&<>"' + '"\'');
  });

  it('unescapes HTML markup', () => {
    expect(unescapeHTML('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;')).toBe(
      '<script src="main.js"></script>'
    );

    expect(unescapeHTML('&lt;strong&gt;Hello&lt;/strong&gt;')).toBe('<strong>Hello</strong>');
  });

  it('unescapes HTML attribute values', () => {
    expect(unescapeHTML('&lt;div data-message=&quot;Hello &gt; World&quot;&gt;&lt;/div&gt;')).toBe(
      '<div data-message="Hello > World"></div>'
    );
  });

  it('unescapes single and double quotes', () => {
    expect(unescapeHTML('It&#39;s a beautiful day!')).toBe("It's a beautiful day!");
    expect(unescapeHTML('&quot;Hello&quot; and &#34;World&#34;')).toBe('"Hello" and "World"');
  });

  it('unescapes multiple occurrences of the same entity', () => {
    expect(unescapeHTML('&lt;&lt;Hello&gt;&gt; &amp;&amp;')).toBe('<<Hello>> &&');
  });

  it('preserves unsupported HTML entities', () => {
    expect(unescapeHTML('&nbsp; &copy; &euro; &#65; &#x3D;')).toBe('&nbsp; &copy; &euro; &#65; &#x3D;');
  });

  it('decodes HTML entities in a single pass', () => {
    expect(unescapeHTML('&amp;lt;div&amp;gt;')).toBe('&lt;div&gt;');
    expect(unescapeHTML('Tom &amp;amp; Jerry')).toBe('Tom &amp; Jerry');
  });

  it('preserves whitespace and line breaks', () => {
    expect(unescapeHTML('  Hello &amp; world\n\tNext line\r\n  ')).toBe('  Hello & world\n\tNext line\r\n  ');
  });

  it('preserves Unicode characters and emojis', () => {
    expect(unescapeHTML('Καλημέρα &amp; 世界! 😀')).toBe('Καλημέρα & 世界! 😀');
  });

  it('returns the original string when no supported entities are present', () => {
    expect(unescapeHTML('Hello world!')).toBe('Hello world!');
  });

  it('returns an empty string for empty input', () => {
    expect(unescapeHTML('')).toBe('');
  });

  it('throws a TypeError when the argument is not a string', () => {
    for (const value of [undefined, null, 42, true, {}, []]) {
      expect(() => unescapeHTML(value)).toThrow(new TypeError('Expected a string for first argument'));
    }
  });
});
