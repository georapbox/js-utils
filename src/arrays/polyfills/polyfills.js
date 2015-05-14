// These prototypes are provided by the Mozilla foundation and
// are distributed under the MIT license.
// http://www.ibiblio.org/pub/Linux/LICENSES/mit.license

/**
 * arr.every(callback[, thisArg])
 * The every() method tests whether all elements in the array
 * pass the test implemented by the provided function.
 * @param {Function} callback: Function to test for each element.
 * @param [thisArg]: Value to use as this when executing callback.
 * MDN: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 */
if (Array.prototype.every) {
    Array.prototype.every = function (fun /*, thisArg */) {
        'use strict';

        if (this === void 0 || this === null) {
            throw new TypeError();
        }

        var t = Object(this),
            len = t.length >>> 0;

        if (typeof fun !== 'function') {
            throw new TypeError();
        }

        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t && !fun.call(thisArg, t[i], i, t)) {
                return false;
            }
        }

        return true;
    };
}

/**
 * arr.filter(callback[, thisArg])
 * The filter() method creates a new array with all elements that
 * pass the test implemented by the provided function.
 * @param {Function} callback Function to test each element of the array.
 * @param [thisArg] Value to use as this when executing callback.
 * MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun /*, thisArg */) {
        'use strict';

        if (this === void 0 || this === null) {
            throw new TypeError();
        }

        var t = Object(this),
            len = t.length >>> 0;

        if (typeof fun !== 'function') {
            throw new TypeError();
        }

        var res = [],
            thisArg = arguments.length >= 2 ? arguments[1] : void 0;

        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i];

                // NOTE: Technically this should Object.defineProperty at
                //       the next index, as push can be affected by
                //       properties on Object.prototype and Array.prototype.
                //       But that method's new, and collisions should be
                //       rare, so use the more-compatible alternative.
                if (fun.call(thisArg, val, i, t)) {
                    res.push(val);
                }
            }
        }

        return res;
    };
}

/**
 * arr.forEach(callback[, thisArg])
 * The forEach() method executes a provided function once per array element.
 * @param {Function} callback: Function to execute for each element.
 * @param [thisArg]: Value to use as this when executing callback.
 * MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.com/#x15.4.4.18
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
        'use strict';

        var T, k;

        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }

        // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get internal method of O with the argument 'length'.
        // 3. Let len be ToUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If IsCallable(callback) is false, throw a TypeError exception.
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (thisArg) {
            T = thisArg;
        }

        // 6. Let k be 0
        k = 0;

        // 7. Repeat, while k < len
        while (k < len) {
            var kValue;

            // a. Let Pk be ToString(k).
            //   This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
            //   This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {
                // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
                kValue = O[k];

                // ii. Call the Call internal method of callback with T as the this value and
                // argument list containing kValue, k, and O.
                callback.call(T, kValue, k, O);
            }
            // d. Increase k by 1.
            k++;
        }
        // 8. return undefined
    };
}

/**
 * arr.indexOf(searchElement[, fromIndex])
 * The indexOf() method returns the first index at which a given
 * element can be found in the array, or -1 if it is not present.
 * @param searchElement: Element to locate in the array.
 * @param {Number} [fromIndex]: Default: 0 (Entire array is searched).
 * MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        'use strict';

        if (this === undefined || this === null) {
            throw new TypeError('"this" is null or not defined');
        }

        var length = this.length >>> 0; // Hack to convert object.length to a UInt32

        fromIndex = +fromIndex || 0;

        if (Math.abs(fromIndex) === Infinity) {
            fromIndex = 0;
        }

        if (fromIndex < 0) {
            fromIndex += length;
            if (fromIndex < 0) {
                fromIndex = 0;
            }
        }

        for (;fromIndex < length; fromIndex++) {
            if (this[fromIndex] === searchElement) {
                return fromIndex;
            }
        }

        return -1;
    };
}

/**
 * array.lastIndexOf(searchElement[, fromIndex])
 * The lastIndexOf() method returns the last index at which a given element can be found in the array,
 * or -1 if it is not present. The array is searched backwards, starting at fromIndex.
 * @param  searchElement: Element to locate in the array.
 * @param {Number} [fromIndex]: The index at which to start searching backwards. Defaults to the array's length.
 * MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
 */
if (!Array.prototype.lastIndexOf) {
    Array.prototype.lastIndexOf = function (searchElement /*, fromIndex*/) {
        'use strict';

        if (this === void 0 || this === null) {
            throw new TypeError();
        }

        var n, k,
            t = Object(this),
            len = t.length >>> 0;

        if (len === 0) {
            return -1;
        }

        n = len - 1;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) {
                n = 0;
            } else if (n != 0 && n != (1 / 0) && n != -(1 / 0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }

        for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}

/**
 * arr.map(callback[, thisArg])
 * The map() method creates a new array with the results of
 * calling a provided function on every element in this array.
 * @param {Function} callback: Function that produces an element of the new Array, taking three arguments:
 *                             1. currentValue: The current element being processed in the array.
 *                             2. index: The index of the current element being processed in the array.
 *                             3. array: The array map was called upon.
 * @param [thisArg]: Value to use as this when executing callback.
 * MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.com/#x15.4.4.19
if (!Array.prototype.map) {
    Array.prototype.map = function (callback, thisArg) {
        'use strict';

        var T, A, k;

        if (this == null) {
            throw new TypeError(" this is null or not defined");
        }

        // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
        // 3. Let len be ToUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If IsCallable(callback) is false, throw a TypeError exception.
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (thisArg) {
            T = thisArg;
        }

        // 6. Let A be a new array created as if by the expression new Array( len) where Array is
        // the standard built-in constructor with that name and len is the value of len.
        A = new Array(len);

        // 7. Let k be 0
        k = 0;

        // 8. Repeat, while k < len
        while (k < len) {
            var kValue, mappedValue;

            // a. Let Pk be ToString(k).
            //   This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
            //   This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {
                var Pk = k.toString(); // This was missing per item a. of the above comment block and was not working in IE8 as a result

                // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
                kValue = O[Pk];

                // ii. Let mappedValue be the result of calling the Call internal method of callback
                // with T as the this value and argument list containing kValue, k, and O.
                mappedValue = callback.call(T, kValue, k, O);

                // iii. Call the DefineOwnProperty internal method of A with arguments
                // Pk, Property Descriptor {Value: mappedValue, Writable: true, Enumerable: true, Configurable: true},
                // and false.

                // In browsers that support Object.defineProperty, use the following:
                // Object.defineProperty( A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });

                // For best browser support, use the following:
                A[Pk] = mappedValue;
            }
            // d. Increase k by 1.
            k++;
        }

        // 9. return A
        return A;
    };
}

/**
 * arr.some(callback[, thisArg])
 * The some() method tests whether some element in the array passes the test implemented by the provided function.
 * @param {Function} callback: Function to test for each element.
 * @param [thisArg]: Value to use as this when executing callback.
 * MDN: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 */
if (!Array.prototype.some) {
    Array.prototype.some = function (fun /*, thisArg */) {
        'use strict';

        if (this === void 0 || this === null) {
            throw new TypeError();
        }

        var t = Object(this),
            len = t.length >>> 0;

        if (typeof fun !== 'function') {
            throw new TypeError();
        }

        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(thisArg, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

/**
 * arr.reduce(callback[, initialValue])
 * The reduce() method applies a function against an accumulator and each value of the array
 * (from left-to-right) has to reduce it to a single value.
 * @param {function} callback Function to execute on each value in the array, taking four arguments:
 *                            1. previousValue: The value previously returned in the last invocation of the callback, or initialValue, if supplied.
 *                            2. currentValue: The current element being processed in the array.
 *                            3. index: The index of the current element being processed in the array.
 *                            4. array: The array reduce was called upon.
 * @param {object} [initialValue] Object to use as the first argument to the first call of the callback.
 * MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(callback /*, initialValue*/) {
        'use strict';

        if (this == null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var t = Object(this), len = t.length >>> 0, k = 0, value;
        if (arguments.length == 2) {
            value = arguments[1];
        } else {
            while (k < len && !(k in t)) {
                k++;
            }
            if (k >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            value = t[k++];
        }
        for (; k < len; k++) {
            if (k in t) {
                value = callback(value, t[k], k, t);
            }
        }
        return value;
    };
}
