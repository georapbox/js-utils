(function () {
    'use strict';

    var jsEssentials = {
        arrays: {
            compact: require('./src/arrays/compact/compact')
        },
        strings: {},
        objects: {},
        numbers: {},
        dom: {},
        misc: {}
    };

    if (window) {
        window.jsEssentials = jsEssentials;
        jsEssentials = null;
    }
}());
