var unescapeHTML = require('./unescapeHTML');

describe('String/unescapeHTML', function () {
  it('should unescape a HTML string', function () {
    expect(unescapeHTML('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;'))
      .toEqual('<script src="main.js"><\/script>'); // eslint-disable-line no-useless-escape

    expect(unescapeHTML('Hello &amp; &lt;span&gt;World&lt;/span&gt;'))
      .toEqual('Hello & <span>World</span>');

    expect(unescapeHTML('&lt;p data-id&#x3D;&quot;1&quot;&gt;lorem ipsum&lt;&#x2F;p&gt;'))
      .toEqual('<p data-id="1">lorem ipsum</p>');

    expect(unescapeHTML('&#x60;hello world&#x60;')).toEqual('`hello world`');

    expect(function () {
      return unescapeHTML({});
    }).toThrow();
  });
});
