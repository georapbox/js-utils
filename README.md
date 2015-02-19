#smallsJS
> Not yet another Javascript library.

**smallsJS** is by no means a library and it's not meant to be one. It's just a collection of javascript standalone functions (pick & go) for everyday tasks.

*Because sometimes we need <strong>small</strong> solutions and not a whole library.*

###Table of contents

####Arrays
- [Polyfills](src/arrays/polyfills) - Collection of array polyfills.
 - [Array.prototype.every()](src/arrays/polyfills#arrayprototypeevery)
 - [Array.prototype.filter()](src/arrays/polyfills#arrayprototypefilter)
 - [Array.prototype.forEach()](src/arrays/polyfills#arrayprototypeforeach)
 - [Array.prototype.indexOf()](src/arrays/polyfills#arrayprototypeindexof)
 - [Array.prototype.lastIndexOf()](src/arrays/polyfills#arrayprototypelastindexof)
 - [Array.prototype.map()](src/arrays/polyfills#arrayprototypemap)
 - [Array.prototype.some()](src/arrays/polyfills#arrayprototypesome)

- [compact](src/arrays/compact) - Creates an array with all falsey values removed. 'false', 'null', '0', '""', 'undefined', and 'NaN' are falsey.

- [diff](src/arrays/diff) - Returns an array with only the unique values from the first array, by excluding all values from the second array using strict equality for comparisons.

- [filter](src/arrays/filter) - Creates a new array with all elements that pass the test implemented by the provided callback function.

- [findIndex](src/arrays/findIndex) - Returns the index of the first element of a collection that passes the callback check.

- [findLastIndex](src/arrays/findLastIndex) - Returns the index of the first element of a collection that passes the callback check, iterating from right to left.

- [forEach](src/arrays/forEach) - Executes a provided callback function once per array element.

- [pluck](src/arrays/pluck) - Retrieves the value of a specified property from all elements in an array.

- [sortBy](src/arrays/sortBy) - Sorts an **array of objects** by a property.

- [uniq](src/arrays/uniq) - Removes duplicate primitive values from an array.

####Strings
- [beginsWith](src/strings/beginsWith) - Returns true if string begins with substring (prefix).

- [camelize](src/strings/camelize) - Converts a string into camel casing, removing "underscores", "dashes" or spaces (spaces is optional).

- [capitalize](src/strings/capitalize) - Capitalizes the first character of a string ( Optionally, converts the rest of the string to lower case).

- [contains](src/strings/contains) - Returns true if the string contains the passed string, else returns false.

- [count](src/strings/count) - Counts the occurrences of substring in a string.

- [dasherize](src/strings/dasherize) - Converts a camel cased string into a string delimited by dashes.

- [endsWith](strins/endsWith) - Returns true if string ends with substring (suffix).

- [escapeHTML](src/strings/escapeHTML) - Escapes a HTML string.

- [removePrefix](src/strings/removePrefix) - Removes substring (prefix) from start of a string.

- [removeSuffix](src/strings/removeSuffix) - Removes substring (suffix) from end of a string.

- [replaceAll](src/strings/replaceAll) -Returns a new string with all occurrences of subStr replaced with replaceStr.

- [strip](src/strings/strip) - Returns a new string with all occurrences of arguments passed removed.

- [stripHTML](src/strings/stripHTML) - Returns a new string with all HTML tags removed.

- [subStr](src/strings/subStr) - Returns a substring denoted by n (positive or negative) characters.

- [supplant](src/strings/supplant) - supplant() does variable substitution on a string. It scans through the string looking for expressions enclosed in {{ }} braces. If an expression is found, use it as a key on the object, and if the key has a string value or number value, it is substituted for the bracket expression and it repeats.

- [trim](src/strings/trim#trim) - Removes whitespace from both ends of a string.

- [trimLeft](src/strings/trim#trimleft) - Removes whitespace from the left end of a string.

- [trimRight](src/strings/trim#trimright) - Removes whitespace from the right end of a string.

- [truncate](src/strings/truncate) - Truncates a string based on character count.

- [unescapeHTML](src/strings/unescapeHTML) - Unescapes a HTML string.

- [wrapHTML](src/strings/wrapHTML) - Wraps a string with a HTML tag with attributes if specified.

####Numbers
- [average](src/numbers/average) - Calculates the average of a set of numbers.

- [isEven](scr/numbers/isEven) - Checks if a number is even.

- [max](src/numbers/max) - Returns the largest of zero or more numbers.

- [min](src/numbers/min) - Returns the smallest of zero or more numbers.

- [numberFormat](src/numbers/numberFormat) - Formats a number based on the number of decimal points, the decimal seperator and the thousands seperator.

- [randomBetween](src/numbers/randomBetween) - Returns a pseudo-random number (integer or floating-point) between a min (inclusive) and a max (exclusive) value.

####Objects
- [extend](src/objects/extend) - Merges (deep copy) the contents of two or more objects together into the first object.

- [forIn](src/objects/forIn) - Iterates over **own and inherited** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)

- [forOwn](src/objects/forOwn) - Iterates over **own** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)

- [isArray](src/objects/isArray) - Checks if a "value" is an array.

- [isBoolean](src/objects/isBoolean) - Checks if a "value" is a boolean value.

- [isDate](src/objects/isDate) - Checks if a "value" is a date.

- [isElement](src/objects/isElement) - Checks if "value" is a DOM element.

- [isEmpty](src/objects/isEmpty) - Checks if a "value" is empty.

- [isFunction](src/objects/isFunction) - Checks if "value" is a function.

- [isNumber](src/objects/isNumber) - Checks if a "value" is a number.

- [isObject](src/objects/isObject) - Checks if <code>value</code> is the language type of <code>Object</code>.

- [isPlainObject](src/objects/isPlainObject) - Checks if <code>value</code> is an object created by the <code>Object</code> constructor.

- [isString](src/objects/isString) - Checks if a "value" is a string.

##Installation
- To clone the repository, run: <code>git clone https://github.com/georapbox/smallsJS.git</code>
- To install dev dependancies, (from the root folder of the project) run: <code>npm install</code><br/>
(Required to build the documentation and run the tests)

##Build the documentation
From the root folder of the project, run: <code>grunt buildDocs</code>.
This will create a <code>docs</code> folder to the root of the project, containing all <code>README</code> files converted to HTML documents.
