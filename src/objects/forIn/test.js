/* global forIn */

(function () {
    'use strict';

    describe('Object/forIn', function () {
        it('iterates over own and inherited enumerable properties of an object', function () {
            var props = [];

            function Shape() {
                this.x = 0;
                this.y = 0;
            }

            Shape.prototype.move = function (x, y) {
                this.x += x;
                this.y += y;
            };

            forIn(new Shape(), function (value, key, obj) {
                props.push(key);
            });

            expect(props).toEqual(['x', 'y', 'move']);
        });
    });
}());
