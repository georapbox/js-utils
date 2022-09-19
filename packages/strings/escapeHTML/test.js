const escapeHTML = require('./escapeHTML');

describe('String/escapeHTML', function () {
  it('should escape a HTML string', function () {
    expect(escapeHTML('<script src="main.js"><\/script>')) // eslint-disable-line no-useless-escape
      .toEqual('&lt;script src&#x3D;&quot;main.js&quot;&gt;&lt;&#x2F;script&gt;');

    expect(escapeHTML('Hello & <span>World</span>'))
      .toEqual('Hello &amp; &lt;span&gt;World&lt;&#x2F;span&gt;');

    expect(escapeHTML('<p data-id="1">lorem ipsum</p>'))
      .toEqual('&lt;p data-id&#x3D;&quot;1&quot;&gt;lorem ipsum&lt;&#x2F;p&gt;');

    expect(escapeHTML('`hello world`')).toEqual('&#x60;hello world&#x60;');

    expect(function () {
      return escapeHTML(['Hello & <span>World</span>']);
    }).toThrow(new TypeError('Expected a string for first argument'));
  });
});
