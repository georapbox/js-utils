/*global before*/

(function () {
    'use strict';

    describe('Function/before', function () {
        it('should invoke a function up to 5 times', function () {
            var count = 0,
                result;

            var doSomething = before(6, function () {
                return count += 1;
            });

            for (var i = 0; i < 10; i += 1) {
                result = doSomething();
            }

            expect(result).toEqual(5);
        });

        it('function is never invoked', function () {
            var count = 0,
                result;

            var doSomething = before('six', function () {
                return count += 1;
            });

            for (var i = 0; i < 10; i += 1) {
                result = doSomething();
            }

            expect(result).toBeUndefined();
        });
    });
}());
