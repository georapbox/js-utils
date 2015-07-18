(function () {
    'use strict';

    var jsEssentials = {
        arrays: {
            compact: require('./src/arrays/compact/compact'),
            diff: require('./src/arrays/diff/diff'),
            filter: require('./src/arrays/filter/filter'),
            findIndex: require('./src/arrays/findIndex/findIndex'),
            findLastIndex: require('./src/arrays/findLastIndex/findLastIndex'),
            forEach: require('./src/arrays/forEach/forEach'),
            pluck: require('./src/arrays/pluck/pluck'),
            sortBy: require('./src/arrays/sortBy/sortBy'),
            uniq: require('./src/arrays/uniq/uniq')
        },
        strings: {
            beginsWith: require('./src/strings/beginsWith/beginsWith'),
            camelize: require('./src/strings/camelize/camelize'),
            capitalize: require('./src/strings/capitalize/capitalize'),
            chompLeft: require('./src/strings/chompLeft/chompLeft'),
            chompRight: require('./src/strings/chompRight/chompRight'),
            collapseWhitespace: require('./src/strings/collapseWhitespace/collapseWhitespace'),
            contains: require('./src/strings/contains/contains'),
            count: require('./src/strings/count/count'),
            dasherize: require('./src/strings/dasherize/dasherize'),
            endsWith: require('./src/strings/endsWith/endsWith'),
            escapeHTML: require('./src/strings/escapeHTML/escapeHTML'),
            pad: require('./src/strings/pad/pad'),
            padLeft: require('./src/strings/pad/padLeft'),
            padRight: require('./src/strings/pad/padRight'),
            randomString: require('./src/strings/randomString/randomString'),
            removePrefix: require('./src/strings/removePrefix/removePrefix'),
            removeSuffix: require('./src/strings/removeSuffix/removeSuffix'),
            repeat: require('./src/strings/repeat/repeat'),
            replaceAll: require('./src/strings/replaceAll/replaceAll'),
            strip: require('./src/strings/strip/strip'),
            stripHTML: require('./src/strings/stripHTML/stripHTML'),
            subStr: require('./src/strings/subStr/subStr'),
            subStrAfterChars: require('./src/strings/subStrAfterChars/subStrAfterChars'),
            supplant: require('./src/strings/supplant/supplant'),
            trim: require('./src/strings/trim/trim'),
            trimLeft: require('./src/strings/trim/trimLeft'),
            trimRight: require('./src/strings/trim/trimRight'),
            truncate: require('./src/strings/truncate/truncate'),
            unescapeHTML: require('./src/strings/unescapeHTML/unescapeHTML'),
            wrapHTML: require('./src/strings/wrapHTML/wrapHTML')
        },
        objects: {
            extend: require('./src/objects/extend/extend'),
            forIn: require('./src/objects/forIn/forIn'),
            forOwn: require('./src/objects/forOwn/forOwn'),
            isArray: require('./src/objects/isArray/isArray'),
            isBoolean: require('./src/objects/isBoolean/isBoolean'),
            isDate: require('./src/objects/isDate/isDate'),
            isElement: require('./src/objects/isElement/isElement'),
            isEmpty: require('./src/objects/isEmpty/isEmpty'),
            isFunction: require('./src/objects/isFunction/isFunction'),
            isNumber: require('./src/objects/isNumber/isNumber'),
            isObject: require('./src/objects/isObject/isObject'),
            isPlainObject: require('./src/objects/isPlainObject/isPlainObject'),
            isString: require('./src/objects/isString/isString')
        },
        numbers: {
            average: require('./src/numbers/average/average'),
            isEven: require('./src/numbers/isEven/isEven'),
            isOdd: require('./src/numbers/isOdd/isOdd'),
            max: require('./src/numbers/max/max'),
            min: require('./src/numbers/min/min'),
            numberFormat: require('./src/numbers/numberFormat/numberFormat'),
            randomBetween: require('./src/numbers/randomBetween/randomBetween')
        },
        dom: {
            whichAnimationEnd: require('./src/dom/whichAnimationEnd/whichAnimationEnd'),
            whichTransitionEnd: require('./src/dom/whichTransitionEnd/whichTransitionEnd')
        },
        misc: {
            debounce: require('./src/misc/debounce/debounce'),
            throttle: require('./src/misc/throttle/throttle')
        }
    };

    if (window) {
        window.jsEssentials = jsEssentials;
        jsEssentials = null;
    }
}());
