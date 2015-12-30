# jsEssentials
> Not yet another Javascript library.

**jsEssentials** is by no means a library and it's not meant to be one. It's just a collection of javascript standalone functions to cherrypick from, for everyday tasks.

*Because sometimes we don't need a whole library to get the job done.*

### Table of contents

#### Arrays

|Method|Description|
|------|-----------|
|[compact](src/arrays/compact)|Creates an array with all falsey values removed. 'false', 'null', '0', '""', 'undefined', and 'NaN' are falsey.|
|[diff](src/arrays/diff)|Returns an array with only the unique values from the first array, by excluding all values from the second array using strict equality for comparisons.|
|[filter](src/arrays/filter)|Creates a new array with all elements that pass the test implemented by the provided callback function.|
|[findIndex](src/arrays/findIndex)|Returns the index of the first element of a collection that passes the callback check.|
|[findLastIndex](src/arrays/findLastIndex)|Returns the index of the first element of a collection that passes the callback check, iterating from right to left.|
|[forEach](src/arrays/forEach)|Executes a provided callback function once per array element.|
|[pluck](src/arrays/pluck)|Retrieves the value of a specified property from all elements in an array.|
|[shuffle](src/arrays/shuffle)|Randomize array element order in-place, using the Fisher-Yates (aka Knuth) Shuffle algorithm.|
|[reverse](src/arrays/reverse)|Reverses an array in place. The first array element becomes the last and the last becomes the first.|
|[sort](src/arrays/sort)|Sorts an **array of primitive values**.|
|[sortBy](src/arrays/sortBy)|Sorts an **array of objects** by a property.|
|[uniq](src/arrays/uniq)|Removes duplicate primitive values from an array.|


|[Polyfills](src/arrays/polyfills) - Collection of array polyfills.|Description|
|------------------------------------------------------------------|-----------|
|[Array.prototype.every()](src/arrays/polyfills#arrays--arrayprototypeevery)|Tests whether all elements in the array pass the test implemented by the provided function.|
|[Array.prototype.filter()](src/arrays/polyfills#arrays--arrayprototypefilter)|Creates a new array with all elements that pass the test implemented by the provided function.|
|[Array.prototype.forEach()](src/arrays/polyfills#arrays--arrayprototypeforeach)|Executes a provided function once per array element.|
|[Array.prototype.indexOf()](src/arrays/polyfills#arrays--arrayprototypeindexof)|Returns the first index at which a given element can be found in the array, or -1 if it is not present.|
|[Array.prototype.lastIndexOf()](src/arrays/polyfills#arrays--arrayprototypelastindexof)|Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.|
|[Array.prototype.map()](src/arrays/polyfills#arrays--arrayprototypemap)|Creates a new array with the results of calling a provided function on every element in this array.|
|[Array.prototype.some()](src/arrays/polyfills#arrays--arrayprototypesome)|Tests whether some element in the array passes the test implemented by the provided function.|
|[Array.prototype.reduce()](src/arrays/polyfills#arrays--arrayprototypereduce)|Applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.|


#### Strings
|Method|Description|
|------|-----------|
|[beginsWith](src/strings/beginsWith)|Returns true if string begins with substring (prefix).|
|[camelize](src/strings/camelize)|Converts a string into camel casing, removing "underscores", "dashes" or spaces (spaces is optional).|
|[capitalize](src/strings/capitalize)|Capitalizes the first character of a string ( Optionally, converts the rest of the string to lower case).|
|[chompLeft](src/strings/chompLeft)|Removes a prefix from the beginning of a string.|
|[chompRight](src/strings/chompRight)|Removes a suffix from the end of a string.|
|[collapseWhitespace](src/strings/collapseWhitespace)|Converts all adjacent whitespace characters to a single space.|
|[contains](src/strings/contains)|Returns true if the string contains the passed string, else returns false.|
|[count](src/strings/count)|Counts the occurrences of substring in a string.|
|[countWords](src/strings/countWords)|Counts words in a string.|
|[dasherize](src/strings/dasherize)|Converts a camel cased string into a string delimited by dashes.|
|[endsWith](src/strings/endsWith)|Returns true if string ends with substring (suffix).|
|[escapeHTML](src/strings/escapeHTML)|Escapes a HTML string.|
|[pad](src/strings/pad#strings--pad)|Pad <code>str</code> on **both** sides to the given <code>len</code>, with optional <code>ch</code> defaulting to a space.|
|[padLeft](src/strings/pad#strings--padleft)|Pad <code>str</code> on **left** side to the given <code>len</code>, with optional <code>ch</code> defaulting to a space.|
|[padRight](src/strings/pad#strings--padright)|Pad <code>str</code> on **right** side to the given <code>len</code>, with optional <code>ch</code> defaulting to a space.|
|[randomString](src/strings/randomString)|Generates a random string of <code>n</code> characters, from the <code>chars</code> string provided by the user.|
|[removePrefix](src/strings/removePrefix)|Removes substring (prefix) from start of a string.|
|[removeSuffix](src/strings/removeSuffix)|Removes substring (suffix) from end of a string.|
|[repeat](src/strings/repeat)|Returns a string repeated <code>count</code> times.|
|[replaceAll](src/strings/replaceAll)|Returns a new string with all occurrences of subStr replaced with replaceStr.
|[strip](src/strings/strip)|Returns a new string with all occurrences of arguments passed removed.|
|[stripHTML](src/strings/stripHTML)|Returns a new string with all HTML tags removed.|
|[subStr](src/strings/subStr)|Returns a substring denoted by n (positive or negative) characters.|
|[subStrAfterChars](src/strings/subStrAfterChars)|Returns a substring after a specific sequence of character(s).|
|[supplant](src/strings/supplant)|supplant() does variable substitution on a string. It scans through the string looking for expressions enclosed in {{ }} braces. If an expression is found, use it as a key on the object, and if the key has a string value or number value, it is substituted for the bracket expression and it repeats.|
|[trim](src/strings/trim#strings--trim)|Removes whitespace from both ends of a string.|
|[trimLeft](src/strings/trim#strings--trimleft)|Removes whitespace from the left end of a string.|
|[trimRight](src/strings/trim#strings--trimright)|Removes whitespace from the right end of a string.|
|[truncate](src/strings/truncate)|Truncates a string based on character count.|
|[unescapeHTML](src/strings/unescapeHTML)|Unescapes a HTML string.|
|[wrapHTML](src/strings/wrapHTML)|Wraps a string with a HTML tag with attributes if specified.|


#### Numbers
|Method|Description|
|------|-----------|
|[average](src/numbers/average)|Calculates the average of a set of numbers.|
|[max](src/numbers/max)|Returns the largest of zero or more numbers.|
|[min](src/numbers/min)|Returns the smallest of zero or more numbers.|
|[numberFormat](src/numbers/numberFormat)|Formats a number based on the number of decimal points, the decimal seperator and the thousands seperator.|
|[randomBetween](src/numbers/randomBetween)|Returns a pseudo-random number (integer or floating-point) between a min (inclusive) and a max (exclusive) value.|


#### Objects
|Method|Description|
|------|-----------|
|[extend](src/objects/extend)|Merges (deep copy) the contents of two or more objects together into the first object.|
|[forIn](src/objects/forIn)|Iterates over **own and inherited** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)|
|[forOwn](src/objects/forOwn)|Iterates over **own** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)|


#### DOM
|Method|Description|
|------|-----------|
|[preloadImages](src/dom/preloadImages)|Asynchronsouly load images to browser so that can be cached.|
|[scroll](src/dom/scroll)|Easing based scrolling to a specified y point inside page.|
|[whichAnimationEnd](src/dom/whichAnimationEnd)|Detects the supported property name for the "animationend" event.|
|[whichTransitionEnd](src/dom/whichTransitionEnd)|Detects the supported property name for the "transitionend" event.|


#### is
|Method|Description|
|------|-----------|
|[isArray](src/is/isArray)|Checks if a "value" is an array.|
|[isBoolean](src/is/isBoolean)|Checks if a "value" is a boolean value.|
|[isDate](src/is/isDate)|Checks if a "value" is a date.|
|[isElement](src/is/isElement)|Checks if "value" is a DOM element.|
|[isEmpty](src/is/isEmpty)|Checks if a "value" is empty.|
|[isEven](src/is/isEven)|Checks if a number is even.|
|[isExisty](src/is/isExisty)|Checks if a "value" is existy (Not null or undefined).|
|[isFalse](src/is/isFalse)|Checks if a "value" is false (strict equality).|
|[isFalsy](src/is/isFalsy)|Checks if a "value" is falsy.|
|[isFunction](src/is/isFunction)|Checks if "value" is a function.|
|[isNaN](src/is/isNaN)|Determines whether a value is NaN or not.|
|[isNonExisty](src/is/isNonExisty)|Checks if a "value" is non existy (null or undefined).|
|[isNull](src/is/isNull)|Checks if a "value" is null.|
|[isNumber](src/is/isNumber)|Checks if a "value" is a number.|
|[isObject](src/is/isObject)|Checks if a "value" is the language type of <code>Object</code>.|
|[isOdd](src/is/isOdd)|Checks if a number is odd.|
|[isPlainObject](src/is/isPlainObject)|Checks if a "value" is an object created by the <code>Object</code> constructor.|
|[isRegexp](src/is/isRegexp)|Checks if a "value" is a regular expression.|
|[isString](src/is/isString)|Checks if a "value" is a string.|
|[isTrue](src/is/isTrue)|Checks if a "value" is true (strict equality).|
|[isTruthy](src/is/isTruthy)|Checks if a "value" is truthy.|
|[isUndefined](src/is/isUndefined)|Checks if a "value" is undefined.|


#### Misc
|Method|Description|
|------|-----------|
|[debounce](src/misc/debounce)|Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for 'n' milliseconds.|
|[curry](src/misc/curry)|Returns a curried equivalent of the provided function.|
|[throttle](src/misc/throttle)|Limits the number of times a function can be called in a given period.|

## Installation
- To clone the repository, run: <code>git clone https://github.com/georapbox/jsEssentials.git</code>
- To install dev dependancies, (from the root folder of the project) run: <code>$ npm install</code><br/>
(Required to build the documentation, run the tests, etc)

## Build the documentation
From the root folder of the project, run: <code>$ npm run docs</code>.
This will create a <code>docs</code> folder to the root of the project, containing all <code>README</code> files converted to HTML documents.

## Run the tests
From the root folder of the project, run: <code>$ npm run test</code>.
Apart from the results in terminal, this will create a <code>tests-reporter</code> folder to the root of the project, that contains an HTML document with the tests results.
