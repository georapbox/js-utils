/**
 * Constructs and returns a new string which contains the specified number
 * of copies of the string on which it was called, concatenated together.
 *
 * @category String
 * @param {String} subjectString The string to process.
 * @param {Number} [count=0] An integer indicating the number of times to repeat the string.
 * @throws {TypeError} If `subjectString` is not string.
 * @throws {RangeError} If `count` is a negative number or overflows maximum string size.
 * @return {String} A new string containing the specified number of copies of the given string.
 * @example
 *
 * repeat('a', 4);
 * // -> 'aaaa'
 *
 * repeat('a', 2.5);
 * // -> 'aa' (count will be converted to integer)
 *
 * repeat('a', 0);
 * // -> ''
 *
 * repeat('a', null);
 * // -> ''
 *
 * repeat('a');
 * // -> ''
 *
 * repeat('a', NaN);
 * // -> ''
 *
 * repeat('a', Infinity);
 * // -> Throws RangeError
 *
 * repeat('a', -Infinity);
 * // -> Throws RangeError
 *
 * repeat('a', -2);
 * // -> Throws RangeError
 *
 * repeat('a', 1/0);
 * // -> Throws RangeError
 */
function repeat(subjectString, count) {
    'use strict';

    var str, repeat;
    var errors = {
        stringTE: 'first parameter must be a string',
        numberTE: 'repeat count must be a number',
        negativeRE: 'repeat count must be non-negative',
        maximumRE: 'repeat count must be less than infinity and not overflow maximum string size'
    };

    if (typeof subjectString !== 'string') {
        throw new TypeError(errors.stringTE);
    }

    str = '' + subjectString;

    count = +count;

    if (count !== count) {
        count = 0;
    }

    if (count < 0) {
        throw new RangeError(errors.negativeRE);
    }

    if (count === Infinity) {
        throw new RangeError(errors.maximumRE);
    }

    count = Math.floor(count);

    if (str.length === 0 || count === 0) {
        return '';
    }

    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
        throw new RangeError(errors.maximumRE);
    }

    repeat = '';

    for (;;) {
        if ((count & 1) === 1) {
            repeat += str;
        }

        count >>>= 1;

        if (count === 0) {
            break;
        }

        str += str;
    }

    return repeat;
}
