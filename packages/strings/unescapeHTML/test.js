const unescapeHTML = require('./unescapeHTML');

describe('String/unescapeHTML', () => {
  it('should unescape a HTML string', () => {
    expect(unescapeHTML('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;'))
      .toEqual('<script src="main.js"></script>'); // eslint-disable-line no-useless-escape

    expect(unescapeHTML('Hello &amp; &lt;span&gt;World&lt;/span&gt;'))
      .toEqual('Hello & <span>World</span>');

    expect(unescapeHTML('&lt;p data-id=&#34;1&#34;&gt;lorem ipsum&lt;/p&gt;'))
      .toEqual('<p data-id="1">lorem ipsum</p>');

    expect(() => {
      return unescapeHTML({});
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
