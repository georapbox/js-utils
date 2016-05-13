/* global unescapeHTML */

(function () {
    'use strict';

    describe('String/unescapeHTML', function () {
        it('should unescape a HTML string', function () {
            expect(unescapeHTML('&lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;'))
                .toEqual('<script src="main.js"><\/script>');

            expect(unescapeHTML('Hello &amp; &lt;span&gt;World&lt;/span&gt;'))
                .toEqual('Hello & <span>World</span>');

            expect(unescapeHTML('&lt;p data-id=&quot;1&quot;&gt;lorem ipsum&lt;/p&gt;'))
                .toEqual('<p data-id="1">lorem ipsum</p>');

            expect(function () {
                return unescapeHTML({});
            }).toThrow();
        });
    });
}());
