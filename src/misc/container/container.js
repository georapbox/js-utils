(function (name, context, definition) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else {
        context[name] = definition();
    }
}('container', this, function () {
    'use strict';

    function ContainerType(val) {
        this.val = val;
    }

    function container(x) {
        return new ContainerType(x);
    }

    ContainerType.prototype.map = function (fn) {
        return this.val ? container(fn(this.val)) : container(null);
    };

    return container;
}));
