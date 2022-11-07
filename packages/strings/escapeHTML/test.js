const escapeHTML = require('./escapeHTML');

describe('String/escapeHTML', () => {
  it('should escape a HTML string', () => {
    expect(escapeHTML('<script src="main.js"></script>'))
      .toEqual('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;');

    expect(escapeHTML('Hello & <span>World</span>'))
      .toEqual('Hello &amp; &lt;span&gt;World&lt;/span&gt;');

    expect(escapeHTML('<p data-id="1">lorem ipsum</p>'))
      .toEqual('&lt;p data-id=&quot;1&quot;&gt;lorem ipsum&lt;/p&gt;');

    expect(() => {
      return escapeHTML(['Hello & <span>World</span>']);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
