/*global partialRight*/

(function () {
    'use strict';

    describe('Function/partialRight', function () {
        var greet = function (greeting, name) {
            return greeting + ' ' + name;
        };

        var greetGeorge = partialRight(greet, 'George');

        it('partially applied arguments are appended to the arguments', function () {
            expect(greetGeorge('Hello')).toEqual('Hello George');
        });
    });
}());
