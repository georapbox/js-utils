#smallsJS
> Not yet another Javascript library.

**smallsJS** is by no means a library and it's not meant to be one. It's just a collection of javascript standalone functions (pick & go) for everyday tasks.

*Because sometimes we need <strong>small</strong> solutions and not a whole library.*

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

- [diff](arrays/diff) - Returns an array with only the unique values from the first array, by excluding all values from the second array using strict equality for comparisons.

- [filter](arrays/filter) - Creates a new array with all elements that pass the test implemented by the provided callback function.

- [findIndex](arrays/findIndex) - Returns the index of the first element of a collection that passes the callback check.

- [findLastIndex](arrays/findLastIndex) - Returns the index of the first element of a collection that passes the callback check, iterating from right to left.

- [forEach](arrays/forEach) - Executes a provided callback function once per array element.

- [pluck](arrays/pluck) - Retrieves the value of a specified property from all elements in an array.

- [sortBy](arrays/sortBy) - Sorts an **array of objects** by a property.

- [uniq](arrays/uniq) - Removes duplicate primitive values from an array.

####Strings
- [beginsWith](strings/beginsWith) - Returns true if string begins with substring (prefix).

- [camelize](strings/camelize) - Converts a string into camel casing, removing "underscores", "dashes" or spaces (spaces is optional).

- [capitalize](strings/capitalize) - Capitalizes the first character of a string ( Optionally, converts the rest of the string to lower case).

- [contains](strings/contains) - Returns true if the string contains the passed string, else returns false.

- [count](strings/count) - Counts the occurrences of substring in a string.

- [dasherize](strings/dasherize) - Converts a camel cased string into a string delimited by dashes.

- [endsWith](strins/endsWith) - Returns true if string ends with substring (suffix).

- [escapeHTML](strings/escapeHTML) - Escapes a HTML string.

- [removePrefix](strings/removePrefix) - Removes substring (prefix) from start of a string.

- [removeSuffix](strings/removeSuffix) - Removes substring (suffix) from end of a string.

- [replaceAll](strings/replaceAll) -Returns a new string with all occurrences of subStr replaced with replaceStr.

- [strip](strings/strip) - Returns a new string with all occurrences of arguments passed removed.

- [stripHTML](strings/stripHTML) - Returns a new string with all HTML tags removed.

- [subStr](strings/subStr) - Returns a substring denoted by n (positive or negative) characters.

- [supplant](strings/supplant) - supplant() does variable substitution on a string. It scans through the string looking for expressions enclosed in {{ }} braces. If an expression is found, use it as a key on the object, and if the key has a string value or number value, it is substituted for the bracket expression and it repeats.

- [trim](strings/trim#trim) - Removes whitespace from both ends of a string.

- [trimLeft](strings/trim#trimleft) - Removes whitespace from the left end of a string.

- [trimRight](strings/trim#trimright) - Removes whitespace from the right end of a string.

- [truncate](strings/truncate) - Truncates a string based on character count.

- [unescapeHTML](strings/unescapeHTML) - Unescapes a HTML string.

- [wrapHTML](strings/wrapHTML) - Wraps a string with a HTML tag with attributes if specified.

####Numbers
- [average](numbers/average) - Calculates the average of a set of numbers.

- [max](numbers/max) - Returns the largest of zero or more numbers.

- [min](numbers/min) - Returns the smallest of zero or more numbers.

- [numberFormat](numbers/numberFormat) - Formats a number based on the number of decimal points, the decimal seperator and the thousands seperator.

- [randomBetween](numbers/randomBetween) - Returns a pseudo-random number (integer or floating-point) between a min (inclusive) and a max (exclusive) value.

####Objects
- [extend](objects/extend) - Merges (deep copy) the contents of two or more objects together into the first object.

- [forIn](objects/forIn) - Iterates over **own and inherited** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)

- [forOwn](objects/forOwn) - Iterates over **own** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)

- [isArray](objects/isArray) - Checks if a "value" is an array.

- [isBoolean](objects/isBoolean) - Checks if a "value" is a boolean value.

- [isDate](objects/isDate) - Checks if a "value" is a date.

- [isElement](objects/isElement) - Checks if "value" is a DOM element.

- [isEmpty](objects/isEmpty) - Checks if a "value" is empty.

- [isFunction](objects/isFunction) - Checks if "value" is a function.

- [isNumber](objects/isNumber) - Checks if a "value" is a number.

- [isObject](objects/isObject) - Checks if <code>value</code> is the language type of <code>Object</code>.

- [isPlainObject](objects/isPlainObject) - Checks if <code>value</code> is an object created by the <code>Object</code> constructor.

- [isString](objects/isString) - Checks if a "value" is a string.