[![Build Status](https://travis-ci.org/georapbox/jsEssentials.svg?branch=master)](https://travis-ci.org/georapbox/jsEssentials) [![Dependencies](https://david-dm.org/georapbox/jsEssentials.svg?theme=shields.io)](https://david-dm.org/georapbox/jsEssentials) [![devDependency Status](https://david-dm.org/georapbox/jsEssentials/dev-status.svg)](https://david-dm.org/georapbox/jsEssentials#info=devDependencies)

# jsEssentials

A collection of standalone javascript utility functions.

## Array

|Name|Description|
|--------|-----------|
|[chunk](src/arrays/chunk)|Creates an array of elements split into groups the length of size specified.|
|[compact](src/arrays/compact)|Creates an array with all falsy values removed. 'false', 'null', '0', '""', 'undefined', and 'NaN' are falsy.|
|[diff](src/arrays/diff)|Returns an array with only the unique values from the first array, by excluding all values from the second array using strict equality for comparisons.|
|[drop](src/arrays/drop)|Creates a slice of `array` with `n` elements dropped from the beginning.|
|[dropRight](src/arrays/dropRight)|Creates a slice of `array` with `n` elements dropped from the end.|
|[dropRightWhile](src/arrays/dropRightWhile)|Creates a slice of `array` excluding elements dropped from the end, until `predicate` returns falsy.|
|[dropWhile](src/arrays/dropWhile)|Creates a slice of `array` excluding elements dropped from the beginning, until `predicate` returns falsy.|
|[fill](src/arrays/fill)|Fills elements of array with value from start up to end (not including end).|
|[filter](src/arrays/filter)|Creates a new array with all elements that pass the test implemented by the provided callback function.|
|[find](src/arrays/find)|Returns a value in the array, if an element in the array satisfies the provided testing function.|
|[findIndex](src/arrays/findIndex)|Returns the index of the first element of a collection that passes the callback check.|
|[findLastIndex](src/arrays/findLastIndex)|Returns the index of the first element of a collection that passes the callback check, iterating from right to left.|
|[flatten](src/arrays/flatten)|Flattens array a single level deep.|
|[flattenDeep](src/arrays/flattenDeep)|Flattens array recursively.|
|[forEach](src/arrays/forEach)|Executes a provided callback function once per array element.|
|[fromPairs](src/arrays/fromPairs)|Creates an object composed from key-value pairs.|
|[includes](src/arrays/includes)|Determines whether an array includes a certain element.|
|[intersection](src/arrays/intersection)|Creates an array of unique values that are included in all given arrays.|
|[insert](src/arrays/insert)|Inserts elements to array at specific index.|
|[pluck](src/arrays/pluck)|Retrieves the value of a specified property from all elements in an array.|
|[shuffle](src/arrays/shuffle)|Returns a new array with its elements' order randomized, using the Fisher-Yates (aka Knuth) Shuffle algorithm.|
|[reverse](src/arrays/reverse)|Reverses an array (not in place). The first array element becomes the last and the last becomes the first.|
|[tail](src/arrays/tail)|Gets all but the first element of array.|
|[take](src/arrays/take)|Creates a slice of array with `n` items taken from the beginning.|
|[takeRight](src/arrays/takeRight)|Creates a slice of array with `n` items taken from the end.|
|[takeRightWhile](src/arrays/takeRightWhile)|Creates a slice of `array` with elements taken from the end, until `predicate` returns falsy.|
|[takeWhile](src/arrays/takeWhile)|Creates a slice of `array` with elements taken from the beginning, until `predicate` returns falsy.|
|[sort](src/arrays/sort)|Sorts an **array of primitive values**.|
|[sortBy](src/arrays/sortBy)|Sorts an **array of objects** by a property.|
|[uniq](src/arrays/uniq)|Removes duplicate primitive values from an array.|
|[zip](src/arrays/zip)|Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.|


## String

|Name|Description|
|--------|-----------|
|[camelCase](src/strings/camelCase)|Converts a string to camel case, removing any non alphanumeric characters.|
|[capitalize](src/strings/capitalize)|Capitalizes the first character of a string ( Optionally, converts the rest of the string to lower case).|
|[collapseWhitespace](src/strings/collapseWhitespace)|Converts all adjacent whitespace characters to a single space.|
|[contains](src/strings/contains)|Determines whether one string may be found within another string, returning true or false as appropriate.|
|[count](src/strings/count)|Counts the occurrences of substring in a string.|
|[dasherize](src/strings/dasherize)|Converts a camel cased string into a string delimited by dashes.|
|[deburr](src/strings/deburr)|Deburrs a string by converting latin-1 supplementary letters to basic latin letters and removing combining diacritical marks.|
|[endsWith](src/strings/endsWith)|Determines whether a string ends with the characters of another string, returning true or false as appropriate.|
|[escapeHTML](src/strings/escapeHTML)|Escapes a HTML string.|
|[lines](src/strings/lines)|Returns an array with the lines of a a string.|
|[numberFormat](src/numbers/numberFormat)|Formats a number based on the number of decimal points, the decimal separator and the thousands separator.|
|[pad](src/strings/pad)|Pad `subjectString` on **both** sides to the given `len`, with optional `chars` defaulting to a space.|
|[padLeft](src/strings/padLeft)|Pad `subjectString` on **left** side to the given `len`, with optional `chars` defaulting to a space.|
|[padRight](src/strings/padRight)|Pad `subjectString` on **right** side to the given `len`, with optional `chars` defaulting to a space.|
|[randomString](src/strings/randomString)|Generates a random string of `n` characters, from the `chars` string provided by the user.|
|[removePrefix](src/strings/removePrefix)|Removes substring (prefix) from start of a string.|
|[removeSuffix](src/strings/removeSuffix)|Removes substring (suffix) from end of a string.|
|[repeat](src/strings/repeat)|Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.|
|[replaceAll](src/strings/replaceAll)|Returns a new string with all occurrences of subString replaced with replaceString.
|[snakeCase](src/strings/snakeCase)|Converts string into string delimited by underscores.|
|[startsWith](src/strings/startsWith)|Returns true if string begins with substring (prefix).|
|[strip](src/strings/strip)|Returns a new string with all occurrences of arguments passed removed.|
|[stripHTML](src/strings/stripHTML)|Returns a new string with all HTML tags removed.|
|[stripPunctuation](src/strings/stripPunctuation)|Returns a new string with all of punctuation removed.|
|[subStr](src/strings/subStr)|Returns a substring denoted by n (positive or negative) characters.|
|[subStrAfter](src/strings/subStrAfter)|Returns a substring after a specific sequence of character(s).|
|[subStrBefore](src/strings/subStrBefore)|Returns a substring before a specific sequence of character(s).|
|[supplant](src/strings/supplant)|supplant() does variable substitution on a string. It scans through the string looking for expressions enclosed in {{ }} braces. If an expression is found, use it as a key on the object, and if the key has a string value or number value, it is substituted for the bracket expression and it repeats.|
|[trim](src/strings/trim)|Removes whitespace from both ends of a string.|
|[trimLeft](src/strings/trimLeft)|Removes whitespace from the left end of a string.|
|[trimRight](src/strings/trimRight)|Removes whitespace from the right end of a string.|
|[truncate](src/strings/truncate)|Truncates a string based on character count.|
|[unescapeHTML](src/strings/unescapeHTML)|Unescapes a HTML string.|
|[urlSearchParams](src/strings/urlSearchParams)|Factory to access the URL search parameters.|
|[words](src/strings/words)|Splits string into an array of its words.|
|[wrapHTML](src/strings/wrapHTML)|Wraps a string with a HTML tag with attributes if specified.|


## Object

|Name|Description|
|--------|-----------|
|[container](src/objects/container)|Acts as a wrapper/container around the `value` passed in.|
|[extend](src/objects/extend)|Merge the contents of two or more objects together into the first object.|
|[forIn](src/objects/forIn)|Iterates over **own and inherited** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)|
|[forOwn](src/objects/forOwn)|Iterates over **own** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)|
|[get](src/objects/get)|Gets the `value` at path of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.|
|[schemaValidate](src/objects/schemaValidate)|Validates a plain object against a provided schema object.|


## Function

|Name|Description|
|--------|-----------|
|[after](src/function/after)|Creates a function that invokes `func` once it's called `n` or more times.|
|[before](src/function/before)|Creates a function that invokes `func` while it’s called less than `n` times.|
|[compose](src/function/compose)|Chains together functions to create a new function following the mathematical model of function composition.|
|[curry](src/function/curry)|Transforms a function of N arguments in such a way that it can be called as a chain of N functions each with a single argument.|
|[debounce](src/function/debounce)|Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for 'n' milliseconds.|
|[delay](src/function/delay)|Invokes a function after a number of milliseconds.|
|[flip](src/function/flip)|Creates a function that invokes `func` with arguments reversed.|
|[negate](src/function/negate)|Creates a function that negates the result of the predicate `func`.|
|[once](src/function/once)|Ensure a given functionality only runs once.|
|[partial](src/function/partial)|Creates a function that invokes `func` with `args` **prepended** to the arguments it receives.|
|[partialRight](src/function/partialRight)|Creates a function that invokes `func` with `args` **appended** to the arguments it receives.|
|[throttle](src/function/throttle)|Limits the number of times a function can be called in a given period.|


## Is

|Name|Description|
|--------|-----------|
|[isArray](src/is/isArray)|Checks if `value` is an array.|
|[isArrayLike](src/is/isArrayLike)|Checks if `value` is array-like.|
|[isArrayLikeObject](src/is/isArrayLikeObject)|Checks if `value` is array-like and object as well.|
|[isBoolean](src/is/isBoolean)|Checks if `value` is a boolean value.|
|[isDate](src/is/isDate)|Checks if `value` is a date.|
|[isElement](src/is/isElement)|Checks if `value` is a DOM element.|
|[isEmail](src/is/isEmail)|Validates a string as email address.|
|[isEmpty](src/is/isEmpty)|Checks if `value` is empty.|
|[isEven](src/is/isEven)|Checks if `value` is even.|
|[isExisty](src/is/isExisty)|Checks if `value` is existy (Not null or undefined).|
|[isFalse](src/is/isFalse)|Checks if `value` is false (strict equality).|
|[isFalsy](src/is/isFalsy)|Checks if `value` is falsy.|
|[isFiniteNum](src/is/isFiniteNum)|Checks if `value` is a finite number.|
|[isFunction](src/is/isFunction)|Checks if `value` is a function.|
|[isHexadecimal](src/is/isHexadecimal)|Checks if `value` matches a hexadecimal regular expression.|
|[isHexColor](src/is/isHexColor)|Checks if `value` matches a hexadecimal color regular expression.|
|[isInteger](src/is/isInteger)|Checks if `value` is an integer number.|
|[isMap](src/is/isMap)|Checks if `value` is classified as a Map object.|
|[isNaN](src/is/isNaN)|Determines whether a value is NaN or not.|
|[isNonExisty](src/is/isNonExisty)|Checks if `value` is non existy (null or undefined).|
|[isNull](src/is/isNull)|Checks if `value` is null.|
|[isNumber](src/is/isNumber)|Checks if `value` is a number.|
|[isObject](src/is/isObject)|Checks if `value` is the [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types) of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, `new String('')`).|
|[isObjectLike](src/is/isObjectLike)|Checks if `value` is object-like. A value is object-like if it's not `null` and has a `typeof` result of "object".|
|[isOdd](src/is/isOdd)|Checks if `value` is odd.|
|[isPlainObject](src/is/isPlainObject)|Checks if `value` is a plain object (created using `{}`,  `new Object()`, or `Object.create(null)`).|
|[isRegexp](src/is/isRegexp)|Checks if `value` is a regular expression.|
|[isSafeInteger](src/is/isSafeInteger)|Checks if an integer number is in the safe range i.e., it is correctly represented by JavaScript (where all numbers, including integer numbers, are technically floating point number).|
|[isSet](src/is/isSet)|Checks if `value` is classified as a Set object.|
|[isString](src/is/isString)|Checks if `value` is a string.|
|[isSymbol](src/is/isSymbol)|Checks if `value` is classified as a Symbol primitive.|
|[isTrue](src/is/isTrue)|Checks if `value` is true (strict equality).|
|[isTruthy](src/is/isTruthy)|Checks if `value` is truthy.|
|[isUndefined](src/is/isUndefined)|Checks if `value` is undefined.|
|[isWeakMap](src/is/isWeakMap)|Checks if `value` is classified as a WeakMap object.|
|[isWeakSet](src/is/isWeakSet)|Checks if `value` is classified as a WeakSet object.|


## Math

|Name|Description|
|--------|-----------|
|[average](src/math/average)|Calculates the average of a set of numbers.|
|[clamp](src/math/clamp)|Clamps number within the inclusive lower and upper bounds.|
|[degreesToRadians](src/math/degreesToRadians)|Converts degrees to radians.|
|[inRange](src/math/inRange)|Checks if a number is between `min` and `max` including.|
|[lerp](src/math/lerp)|Takes a normalized value within a range of values and converts it to a numerical value that the normalized value points to.|
|[normalize](src/math/normalize)|Takes a value within a range of values and converts that value to a number from 0 to 1 that indicates where it lies in that range.|
|[max](src/math/max)|Returns the largest of zero or more numbers.|
|[min](src/math/min)|Returns the smallest of zero or more numbers.|
|[radiansToDegrees](src/math/radiansToDegrees)|Converts radians to degrees.|
|[randomDist](src/math/randomDist)|Returns a weighted random number (that tends to the center) of a range of numbers based on the number of the iterations set.|
|[randomInt](src/math/randomInt)|Returns a pseudo-random integer number between a min (inclusive) and a max (inclusive) value.|
|[randomRange](src/math/randomRange)|Returns a pseudo-random number between a min (inclusive) and a max (exclusive) value.|
|[roundToNearest](src/math/roundToNearest)|Rounds a number to the nearest multiple of a value provided.|
|[roundToPlaces](src/math/roundToPlaces)|Rounds a number to a number of desired places.|


## DOM

|Name|Description|
|--------|-----------|
|[captureMouse](src/dom/captureMouse)|Captures the mouse position on a specific HTML element.|
|[captureTouch](src/dom/captureTouch)|Captures the touch position on a specific HTML element.|
|[preloadImages](src/dom/preloadImages)|Asynchronously load images to browser so that can be cached.|
|[isEventSupported](src/dom/isEventSupported)|Checks if an event is supported in a browser environment.|
|[scroll](src/dom/scroll)|Easing based scrolling to a specified y point inside page.|
|[whichAnimationEnd](src/dom/whichAnimationEnd)|Detects the supported property name for the "animationend" event.|
|[whichTransitionEnd](src/dom/whichTransitionEnd)|Detects the supported property name for the "transitionend" event.|


## HTML5 Canvas

|Name|Description|
|--------|-----------|
|[CanvasContext](src/canvas/canvasContext)|A class that provides jQuery-style chained access to 2D context methods and properties.|
|[convertImageToBase64](src/canvas/convertImageToBase64)|Converts an image's content to Data URI scheme.|


## Misc

|Name|Description|
|--------|-----------|
|[colorToRGB](src/misc/colorToRGB)|Converts a color value (number or hexadecimal string) to RGB(A) format.|
|[cookie](src/misc/cookie)|Create, read and delete cookies.|
|[parseColor](src/misc/parseColor)|Converts a color number value to a hexadecimal formatted string, or a hexadecimal formatted string to a number.|
|[poll](src/misc/poll)|Periodically check for application's status updates.|
|[Timer](src/misc/Timer)|Simple class to create and manage timers.|

## Installation

- To clone the repository, run: `git clone https://github.com/georapbox/jsEssentials.git`
- To install dev dependancies, (from the root folder of the project) run: `$ npm install`

## Run the tests

From the root folder of the project, run: `$ npm run test`.
Apart from the results in terminal, this will create a `tests-reporter` folder to the root of the project, that contains an HTML document with the tests results.

## License

[The MIT License (MIT)](https://georapbox.mit-license.org/@2015)
