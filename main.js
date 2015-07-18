(function () {
    'use strict';

    var pkg = require('./package.json');
    var name = pkg.name;

    var o = {
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
        window[name] = o;
        o = null;
    }
}());
