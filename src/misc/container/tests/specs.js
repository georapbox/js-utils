/*global container*/

(function () {
    'use strict';

    describe('misc/container', function () {
        function capitalize(item) {
            return item.toUpperCase();
        }

        function head(item) {
            return item[0];
        }

        var res = container(['a', 'b', 'c']).map(head).map(capitalize);

        it('should wrap the value passed', function () {
            expect(typeof container('Hello World')).toEqual('object');
            expect(container('Hello World').val).toEqual('Hello World');
        });

        it('should get first element from array and capitalize', function () {
            expect(res.val).toEqual('A');
        });

        it('should return null if cannot match against a regex', function () {
            expect(res.map(function (val) {
                return val.match(/cat/gi);
            }).val).toBeNull();
        });
    });
}());
