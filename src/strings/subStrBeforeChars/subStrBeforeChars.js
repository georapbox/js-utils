function subStrBeforeChars(str, chars, last) {
    'use strict';

    var args = [].slice.apply(arguments),
        argsLen = args.length,
        index = !last ? str.indexOf(chars) : str.lastIndexOf(chars);

    return argsLen < 2 ? str :
        !!~index && index !== 0 ? str.substr(0, index) : str;
}
