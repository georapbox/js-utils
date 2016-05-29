/* global preloadImages */

(function () {
    'use strict';

    describe('DOM/preloadImages', function () {
        window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

        it('load images to browser asynchronously so that can be cached', function (done) {
            preloadImages([
                'https://scontent.fath2-1.fna.fbcdn.net/v/t1.0-9/10325757_961721860512648_1597977558555673026_n.jpg?oh=47e46777ee66bdcf0bc110744e770c49&oe=57CDB0E1',
                'https://scontent.fath2-1.fna.fbcdn.net/v/t1.0-9/10474866_838010786217090_7343850223156071454_n.jpg?oh=eeffd40012f7f5d9829758a009b8c8d6&oe=57D57266'
            ], function (images) {
                expect(images.length).toEqual(2);
                done();
            });

            expect(function () {
                return preloadImages();
            }).toThrow();
        });
    });
}());
