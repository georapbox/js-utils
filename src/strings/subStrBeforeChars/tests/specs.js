/*global subStrBeforeChars*/

(function () {
    'use strict';

    describe('String/subStrBeforeChars', function () {
        it('should return a substring before a specific sequence of character(s)', function () {
            var str = 'LOREM_IPSUM DOLOR_SIT AMET';

            expect(subStrBeforeChars(str, 'SIT')).toEqual('LOREM_IPSUM DOLOR_');

            expect(subStrBeforeChars(str, '_', true)).toEqual('LOREM_IPSUM DOLOR');

            expect(subStrBeforeChars(str, '')).toEqual(str);

            expect(subStrBeforeChars(str, 'zzz')).toEqual(str);

            expect(subStrBeforeChars(str, 'zzz', true)).toEqual(str);

            expect(function () {
                return subStrBeforeChars(str);
            }).toThrow();
        });
    });
}());
