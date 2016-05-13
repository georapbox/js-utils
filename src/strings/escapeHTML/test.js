/* global escapeHTML */

(function () {
    'use strict';

    describe('String/escapeHTML', function () {
        it('should escape a HTML string', function () {
            expect(escapeHTML('<script src="main.js"><\/script>'))
                .toEqual('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;');

            expect(escapeHTML('Hello & <span>World</span>'))
                .toEqual('Hello &amp; &lt;span&gt;World&lt;/span&gt;');

            expect(escapeHTML('<p data-id="1">lorem ipsum</p>'))
                .toEqual('&lt;p data-id=&quot;1&quot;&gt;lorem ipsum&lt;/p&gt;');

            expect(function () {
                return escapeHTML(['Hello & <span>World</span>']);
            }).toThrow();
        });
    });
}());
