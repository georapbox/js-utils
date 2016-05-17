/**
 * Checks if 'value' is empty.
 * Arrays, strings, or arguments objects with a length of 0 and plain objects containing no
 * own enumerable properties or inherited from prototypes properties are considered "empty".
 *
 * @category Is
 * @NOTE: Use with caution as DOM elements, primitive strings/numbers, host objects may not give consistent results across browsers.
 * @param {*} value The object ot check if is empty.
 * @return {Boolean} True if empty, else false.
 * @example
 *
 * isEmpty(['a', 'b', 'c', 'd']);
 * // -> false
 *
 * isEmpty('Lorem ipsum dolor sit amet');
 * // -> false
 *
 * isEmpty({ a: 'a', b: 'b' });
 * // -> false
 *
 * isEmpty([]);
 * // -> true
 *
 * isEmpty('');
 * // -> true
 *
 * isEmpty(' ');
 * // -> false
 *
 * isEmpty({});
 * // -> true
 *
 * isEmpty(Object.create(null));
 * // -> true
 *
 * isEmpty(Object.create({}));
 * // -> true
 *
 * isEmpty(Object.create({foo: 'bar'}));
 * // -> false (inherits from proptotype)
 *
 * var obj = {};
 * Object.defineProperty(obj, 'hidden', {
 *   value: null,
 *   enumerable: false
 * });
 * isEmpty(obj);
 * // -> true ('hidden' is non-enumerable)
 */
function isEmpty(value) {
    'use strict';

    var prop;

    for (prop in value) {
        return false;
    }

    return true;
}
