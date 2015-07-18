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
        strings: {},
        objects: {},
        numbers: {},
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
