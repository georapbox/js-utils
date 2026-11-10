import { describe, expect, it } from 'vitest';
import { escapeHTML } from './escapeHTML.js';

describe('String/escapeHTML', () => {
  it('escapes the five special HTML characters', () => {
    expect(escapeHTML('&<>"\'')).toBe('&amp;&lt;&gt;&quot;&#39;');
  });

  it('escapes HTML markup', () => {
    expect(escapeHTML('<script src="main.js"></script>')).toBe('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;');
    expect(escapeHTML('<strong>Hello</strong>')).toBe('&lt;strong&gt;Hello&lt;/strong&gt;');
  });

  it('escapes special characters in HTML attribute values', () => {
    expect(escapeHTML('Hello > "World" & friends')).toBe('Hello &gt; &quot;World&quot; &amp; friends');
  });

  it('escapes special characters in a multiline HTML string', () => {
    const str = `
      <button type="button">Open modal</button>
      <script>
        document.querySelector('button').click();
      </script>
    `;

    const expected = `
      &lt;button type=&quot;button&quot;&gt;Open modal&lt;/button&gt;
      &lt;script&gt;
        document.querySelector(&#39;button&#39;).click();
      &lt;/script&gt;
    `;

    expect(escapeHTML(str)).toBe(expected);
  });

  it('escapes every occurrence of special characters', () => {
    expect(escapeHTML('&& << >> "" \'\'')).toBe('&amp;&amp; &lt;&lt; &gt;&gt; &quot;&quot; &#39;&#39;');
  });

  it('escapes ampersands in existing HTML entities', () => {
    expect(escapeHTML('Tom &amp; Jerry')).toBe('Tom &amp;amp; Jerry');
    expect(escapeHTML('&lt;div&gt;')).toBe('&amp;lt;div&amp;gt;');
  });

  it('preserves characters that do not require escaping', () => {
    expect(escapeHTML('Hello world! @#$%^*()')).toBe('Hello world! @#$%^*()');
  });

  it('preserves Unicode characters and emojis', () => {
    expect(escapeHTML('Καλημέρα, 世界! 😀')).toBe('Καλημέρα, 世界! 😀');
  });

  it('preserves whitespace and line breaks', () => {
    expect(escapeHTML('  Hello\n\tworld\r\n  ')).toBe('  Hello\n\tworld\r\n  ');
  });

  it('returns an empty string for empty input', () => {
    expect(escapeHTML('')).toBe('');
  });

  it('throws a TypeError when the argument is not a string', () => {
    for (const value of [undefined, null, 42, true, {}, []]) {
      expect(() => escapeHTML(value)).toThrow(new TypeError('Expected a string for first argument'));
    }
  });
});
