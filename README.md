##smallsJS
> Not yet another Javascript library.

**smallsJS** is by no means a library and it's not meant to be one. It's just a collection of javascript standalone functions (pick & go) for everyday tasks.

<small>*Because sometimes we need **small** solutions and not a whole library.*</small>

###Table of contents

####Arrays
- [Polyfills](arrays/polyfills) - Collection of array polyfills.
 - [Array.prototype.every()](arrays/polyfills#arrayprototypeevery)
 - [Array.prototype.filter()](arrays/polyfills#arrayprototypefilter)
 - [Array.prototype.forEach()](arrays/polyfills#arrayprototypeforeach)
 - [Array.prototype.indexOf()](arrays/polyfills#arrayprototypeindexof)
 - [Array.prototype.lastIndexOf()](arrays/polyfills#arrayprototypelastindexof)
 - [Array.prototype.map()](arrays/polyfills#arrayprototypemap)
 - [Array.prototype.some()](arrays/polyfills#arrayprototypesome)

- [compact](arrays/compact) - Creates an array with all falsey values removed. 'false', 'null', '0', '""', 'undefined', and 'NaN' are falsey.

- [pluck](arrays/pluck) - Retrieves the value of a specified property from all elements in an array.

- [sortBy](arrays/sortBy) - Sorts an **array of objects** by a property.

- [uniq](arrays/uniq) - Removes duplicate primitive values from an array.

####Strings
- [beginsWith](strings/beginsWith) - Returns true if string begins with substring (prefix).

- [camelize](strings/camelize) - Converts a string into camel casing, removing "underscores", "dashes" or spaces (spaces is optional).

- [capitalize](strings/capitalize) - Capitalizes the first character of a string ( Optionally, converts the rest of the string to lower case).

- [contains](strings/contains) - Returns true if the string contains the passed string, else returns false.

- [count](strings/count) - Counts the occurrences of substring in a string.

- [endsWith](strins/endsWith) - Returns true if string ends with substring (suffix).

- [escapeHTML](strings/escapeHTML) - Escapes a HTML string.

- [removePrefix](strings/removePrefix) - Removes substring (prefix) from start of a string.

- [removeSuffix](strings/removeSuffix) - Removes substring (suffix) from end of a string.

- [replaceAll](strings/replaceAll) -Returns a new string with all occurrences of subStr replaced with replaceStr.

- [strip](strings/strip) - Returns a new string with all occurrences of arguments passed removed.

- [subStr](strings/subStr) - Returns a substring denoted by n (positive or negative) characters.

- [trim](strings/trim#trim) - Removes whitespace from both ends of a string.

- [trimLeft](strings/trim#trimleft) - Removes whitespace from the left end of a string.

- [trimRight](strings/trim#trimright) - Removes whitespace from the right end of a string.

####Objects
- [extend](objects/extend) - Merges (deep copy) the contents of two or more objects together into the first object.

- [forIn](objects/forIn) - Iterates over **own and inherited** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)

- [forOwn](objects/forOwn) - Iterates over **own** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)

- [isArray](objects/isArray) - Checks if a "value" is an array.

- [isBoolean](objects/isBoolean) - Checks if a "value" is a boolean value.

- [isEmpty](objects/isEmpty) - Checks if a "value" is empty.

- [isString](objects/isString) - Checks if a "value" is a string.