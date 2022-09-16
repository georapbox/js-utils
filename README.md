![build](https://github.com/georapbox/js-utils/workflows/build/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/georapbox/js-utils/badge.svg?branch=master)](https://coveralls.io/github/georapbox/js-utils?branch=master)
[![License](https://img.shields.io/github/license/georapbox/js-utils?color=blue)](https://github.com/georapbox/js-utils/blob/master/LICENSE)

# js-utils

A collection of dependency-free JavaScript utility functions.

## Array

|Name|Description|
|--------|-----------|
|[chunk](https://github.com/georapbox/js-utils/tree/master/packages/arrays/chunk)|Creates an array of elements split into groups the length of size specified.|
|[compact](https://github.com/georapbox/js-utils/tree/master/packages/arrays/compact)|Creates an array with all falsy values removed. 'false', 'null', '0', '""', 'undefined', and 'NaN' are falsy.|
|[diff](https://github.com/georapbox/js-utils/tree/master/packages/arrays/diff)|Returns an array with only the unique values from the first array, by excluding all values from the second array using strict equality for comparisons.|
|[drop](https://github.com/georapbox/js-utils/tree/master/packages/arrays/drop)|Creates a slice of `array` with `n` elements dropped from the beginning.|
|[dropRight](https://github.com/georapbox/js-utils/tree/master/packages/arrays/dropRight)|Creates a slice of `array` with `n` elements dropped from the end.|
|[dropRightWhile](https://github.com/georapbox/js-utils/tree/master/packages/arrays/dropRightWhile)|Creates a slice of `array` excluding elements dropped from the end, until `predicate` returns falsy.|
|[dropWhile](https://github.com/georapbox/js-utils/tree/master/packages/arrays/dropWhile)|Creates a slice of `array` excluding elements dropped from the beginning, until `predicate` returns falsy.|
|[fill](https://github.com/georapbox/js-utils/tree/master/packages/arrays/fill)|Fills elements of array with value from start up to end (not including end).|
|[find](https://github.com/georapbox/js-utils/tree/master/packages/arrays/find)|Returns a value in the array, if an element in the array satisfies the provided testing function.|
|[findIndex](https://github.com/georapbox/js-utils/tree/master/packages/arrays/findIndex)|Returns the index of the first element of a collection that passes the callback check.|
|[findLastIndex](https://github.com/georapbox/js-utils/tree/master/packages/arrays/findLastIndex)|Returns the index of the first element of a collection that passes the callback check, iterating from right to left.|
|[flat](https://github.com/georapbox/js-utils/tree/master/packages/arrays/flat)|Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.|
|[fromPairs](https://github.com/georapbox/js-utils/tree/master/packages/arrays/fromPairs)|Creates an object composed from key-value pairs.|
|[groupBy](https://github.com/georapbox/js-utils/tree/master/packages/arrays/groupBy)|Creates an object composed of keys generated from the results of running each element of `array` through `iteratee`.|
|[includes](https://github.com/georapbox/js-utils/tree/master/packages/arrays/includes)|Determines whether an array includes a certain element.|
|[intersect](https://github.com/georapbox/js-utils/tree/master/packages/arrays/intersect)|Creates an array of unique values that are included in all given arrays.|
|[insert](https://github.com/georapbox/js-utils/tree/master/packages/arrays/insert)|Inserts one or more elements to array at specific index.|
|[move](https://github.com/georapbox/js-utils/tree/master/packages/arrays/move)|Move an array element to a different position.|
|[partition](https://github.com/georapbox/js-utils/tree/master/packages/arrays/partition)|Creates an array of elements split into two groups (arrays) depending on the result of a predicated function invoked for each iteration.|
|[pluck](https://github.com/georapbox/js-utils/tree/master/packages/arrays/pluck)|Retrieves the value of a specified property from all elements in an array.|
|[remove](https://github.com/georapbox/js-utils/tree/master/packages/arrays/remove)|Removes one or more elements from an array at the specified index(es).|
|[shuffle](https://github.com/georapbox/js-utils/tree/master/packages/arrays/shuffle)|Returns a new array with its elements' order randomized, using the Fisher-Yates (aka Knuth) Shuffle algorithm.|
|[reverse](https://github.com/georapbox/js-utils/tree/master/packages/arrays/reverse)|Reverses an array (not in place). The first array element becomes the last and the last becomes the first.|
|[tail](https://github.com/georapbox/js-utils/tree/master/packages/arrays/tail)|Gets all but the first element of array.|
|[take](https://github.com/georapbox/js-utils/tree/master/packages/arrays/take)|Creates a slice of array with `n` items taken from the beginning.|
|[takeRight](https://github.com/georapbox/js-utils/tree/master/packages/arrays/takeRight)|Creates a slice of array with `n` items taken from the end.|
|[takeRightWhile](https://github.com/georapbox/js-utils/tree/master/packages/arrays/takeRightWhile)|Creates a slice of `array` with elements taken from the end, until `predicate` returns falsy.|
|[takeWhile](https://github.com/georapbox/js-utils/tree/master/packages/arrays/takeWhile)|Creates a slice of `array` with elements taken from the beginning, until `predicate` returns falsy.|
|[sort](https://github.com/georapbox/js-utils/tree/master/packages/arrays/sort)|Sorts an **array of primitive values**.|
|[sortBy](https://github.com/georapbox/js-utils/tree/master/packages/arrays/sortBy)|Sorts an **array of objects** by a property.|
|[uniq](https://github.com/georapbox/js-utils/tree/master/packages/arrays/uniq)|Removes duplicate primitive values from an array.|
|[uniqBy](https://github.com/georapbox/js-utils/tree/master/packages/arrays/uniqBy)|Creates a dupliate free array by accepting an `iteratee` which is invoked for each element in array.|
|[zip](https://github.com/georapbox/js-utils/tree/master/packages/arrays/zip)|Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.|


## String

|Name|Description|
|--------|-----------|
|[camelCase](https://github.com/georapbox/js-utils/tree/master/packages/strings/camelCase)|Converts a string to [camel case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles), eg `'theQuickBrownFoxJumpsOverTheLazyDog'`.|
|[capitalize](https://github.com/georapbox/js-utils/tree/master/packages/strings/capitalize)|Capitalizes the first character of a string (Optionally, converts the rest of the string to lower case).|
|[classnames](https://github.com/georapbox/js-utils/tree/master/packages/strings/classnames)|Creates a string by conditionally joining classNames together.|
|[collapseWhitespace](https://github.com/georapbox/js-utils/tree/master/packages/strings/collapseWhitespace)|Converts all adjacent whitespace characters to a single space.|
|[contains](https://github.com/georapbox/js-utils/tree/master/packages/strings/contains)|Determines whether one string may be found within another string, returning true or false as appropriate.|
|[deburr](https://github.com/georapbox/js-utils/tree/master/packages/strings/deburr)|Deburrs a string by converting latin-1 supplementary letters to basic latin letters and removing combining diacritical marks.|
|[endsWith](https://github.com/georapbox/js-utils/tree/master/packages/strings/endsWith)|Determines whether a string ends with the characters of another string, returning true or false as appropriate.|
|[escapeHTML](https://github.com/georapbox/js-utils/tree/master/packages/strings/escapeHTML)|Escapes a HTML string.|
|[kebabCase](https://github.com/georapbox/js-utils/tree/master/packages/strings/kebabCase)|Converts a string to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles), eg `'the-quick-brown-fox-jumps-over-the-lazy-dog'`.|
|[lines](https://github.com/georapbox/js-utils/tree/master/packages/strings/lines)|Returns an array with the lines of a a string.|
|[numberFormat](https://github.com/georapbox/js-utils/tree/master/packages/strings/numberFormat)|Formats a number based on the number of decimal points, the decimal separator and the thousands separator.|
|[pad](https://github.com/georapbox/js-utils/tree/master/packages/strings/pad)|Pad `subjectString` on **both** sides to the given `len`, with optional `chars` defaulting to a space.|
|[padLeft](https://github.com/georapbox/js-utils/tree/master/packages/strings/padLeft)|Pad `subjectString` on **left** side to the given `len`, with optional `chars` defaulting to a space.|
|[padRight](https://github.com/georapbox/js-utils/tree/master/packages/strings/padRight)|Pad `subjectString` on **right** side to the given `len`, with optional `chars` defaulting to a space.|
|[pascalCase](https://github.com/georapbox/js-utils/tree/master/packages/strings/pascalCase)|Converts a string to [pascal case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles), eg `'TheQuickBrownFoxJumpsOverTheLazyDog'`.|
|[randomString](https://github.com/georapbox/js-utils/tree/master/packages/strings/randomString)|Generates a pseudo-random string of specific `length` allowing a set of characters specified by `chars`.|
|[removePrefix](https://github.com/georapbox/js-utils/tree/master/packages/strings/removePrefix)|Removes substring (prefix) from start of a string.|
|[removeSuffix](https://github.com/georapbox/js-utils/tree/master/packages/strings/removeSuffix)|Removes substring (suffix) from end of a string.|
|[repeat](https://github.com/georapbox/js-utils/tree/master/packages/strings/repeat)|Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.|
|[snakeCase](https://github.com/georapbox/js-utils/tree/master/packages/strings/snakeCase)|Converts a string to [snake case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles), eg `'the_quick_brown_fox_jumps_over_the_lazy_dog'`.|
|[squash](https://github.com/georapbox/js-utils/tree/master/packages/strings/squash)|Removes all spaces from a string; optionally removes any escape sequences such as `\t`, `\n`, `\f`, `\r` and `\v`.|
|[startsWith](https://github.com/georapbox/js-utils/tree/master/packages/strings/startsWith)|Returns true if string begins with substring (prefix).|
|[strip](https://github.com/georapbox/js-utils/tree/master/packages/strings/strip)|Returns a new string with all occurrences of arguments passed removed.|
|[stripHTML](https://github.com/georapbox/js-utils/tree/master/packages/strings/stripHTML)|Returns a new string with all HTML tags removed.|
|[stripPunctuation](https://github.com/georapbox/js-utils/tree/master/packages/strings/stripPunctuation)|Returns a new string with all of punctuation removed.|
|[substringAfter](https://github.com/georapbox/js-utils/tree/master/packages/strings/substringAfter)|Returns a substring after a specific sequence of character(s).|
|[substringBefore](https://github.com/georapbox/js-utils/tree/master/packages/strings/substringBefore)|Returns a substring before a specific sequence of character(s).|
|[supplant](https://github.com/georapbox/js-utils/tree/master/packages/strings/supplant)|supplant() does variable substitution on a string. It scans through the string looking for expressions enclosed in {{ }} braces. If an expression is found, use it as a key on the object, and if the key has a string value or number value, it is substituted for the bracket expression and it repeats.|
|[trim](https://github.com/georapbox/js-utils/tree/master/packages/strings/trim)|Removes whitespace from both ends of a string.|
|[trimLeft](https://github.com/georapbox/js-utils/tree/master/packages/strings/trimLeft)|Removes whitespace from the left end of a string.|
|[trimRight](https://github.com/georapbox/js-utils/tree/master/packages/strings/trimRight)|Removes whitespace from the right end of a string.|
|[truncate](https://github.com/georapbox/js-utils/tree/master/packages/strings/truncate)|Truncates a string based on character count.|
|[unescapeHTML](https://github.com/georapbox/js-utils/tree/master/packages/strings/unescapeHTML)|Unescapes a HTML string.|
|[urlSearchParams](https://github.com/georapbox/js-utils/tree/master/packages/strings/urlSearchParams)|Factory to access the URL search parameters.|
|[words](https://github.com/georapbox/js-utils/tree/master/packages/strings/words)|Splits string into an array of its words.|
|[wrapHTML](https://github.com/georapbox/js-utils/tree/master/packages/strings/wrapHTML)|Wraps a string with a HTML tag with attributes if specified.|


## Object

|Name|Description|
|--------|-----------|
|[deepClone](https://github.com/georapbox/js-utils/tree/master/packages/objects/deepClone)|Creates a deep clone of a given value.|
|[extend](https://github.com/georapbox/js-utils/tree/master/packages/objects/extend)|Merge the contents of two or more objects together into the first object.|
|[forIn](https://github.com/georapbox/js-utils/tree/master/packages/objects/forIn)|Iterates over **own and inherited** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)|
|[forOwn](https://github.com/georapbox/js-utils/tree/master/packages/objects/forOwn)|Iterates over **own** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)|
|[get](https://github.com/georapbox/js-utils/tree/master/packages/objects/get)|Gets the `value` at path of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.|
|[omit](https://github.com/georapbox/js-utils/tree/master/packages/objects/omit)|Creates an object composed of the own enumerable (not inherited) property paths of object that are not omitted.|
|[pick](https://github.com/georapbox/js-utils/tree/master/packages/objects/pick)|Creates an object composed of the picked object properties.|
|[pickBy](https://github.com/georapbox/js-utils/tree/master/packages/objects/pickBy)|Creates an object composed of the object enumerable properties that predicate returns truthy for.|
|[schemaValidate](https://github.com/georapbox/js-utils/tree/master/packages/objects/schemaValidate)|Validates a plain object against a provided schema object.|


## Function

|Name|Description|
|--------|-----------|
|[after](https://github.com/georapbox/js-utils/tree/master/packages/function/after)|Creates a function that invokes `fn` once it's called `n` or more times.|
|[ary](https://github.com/georapbox/js-utils/tree/master/packages/function/ary)|Creates a function that accepts up to `n` arguments, ignoring any additional arguments.|
|[before](https://github.com/georapbox/js-utils/tree/master/packages/function/before)|Creates a function that invokes `fn` while it’s called less than `n` times.|
|[compose](https://github.com/georapbox/js-utils/tree/master/packages/function/compose)|Performs right-to-left function composition.|
|[curry](https://github.com/georapbox/js-utils/tree/master/packages/function/curry)|Returns a curried equivalent of the provided function.|
|[debounce](https://github.com/georapbox/js-utils/tree/master/packages/function/debounce)|Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for 'n' milliseconds.|
|[flip](https://github.com/georapbox/js-utils/tree/master/packages/function/flip)|Creates a function that invokes the original function with its parameters reversed.|
|[negate](https://github.com/georapbox/js-utils/tree/master/packages/function/negate)|Creates a function that negates the result of the predicate `fn`.|
|[once](https://github.com/georapbox/js-utils/tree/master/packages/function/once)|Ensure a given functionality only runs once.|
|[partial](https://github.com/georapbox/js-utils/tree/master/packages/function/partial)|Creates a new function that invokes the provided function with partials prepended to the arguments it receives.|
|[partialRight](https://github.com/georapbox/js-utils/tree/master/packages/function/partialRight)|Creates a new function that invokes the provided function with partials appended to the arguments it receives.|
|[pipe](https://github.com/georapbox/js-utils/tree/master/packages/function/pipe)|Performs left-to-right function composition.|
|[throttle](https://github.com/georapbox/js-utils/tree/master/packages/function/throttle)|Limits the number of times a function can be called in a given period.|
|[unary](https://github.com/georapbox/js-utils/tree/master/packages/function/unary)|Creates a function that accepts up to one argument, ignoring any additional arguments.|


## Is

|Name|Description|
|--------|-----------|
|[isArray](https://github.com/georapbox/js-utils/tree/master/packages/is/isArray)|Checks if a value is an array.|
|[isArrayLike](https://github.com/georapbox/js-utils/tree/master/packages/is/isArrayLike)|Checks if a value is array-like.|
|[isArrayLikeObject](https://github.com/georapbox/js-utils/tree/master/packages/is/isArrayLikeObject)|Checks if a value is array-like and object as well.|
|[isBoolean](https://github.com/georapbox/js-utils/tree/master/packages/is/isBoolean)|Checks if a value is boolean.|
|[isDate](https://github.com/georapbox/js-utils/tree/master/packages/is/isDate)|Checks if a value is a date object.|
|[isElement](https://github.com/georapbox/js-utils/tree/master/packages/is/isElement)|Checks if a value is a DOM element.|
|[isEmail](https://github.com/georapbox/js-utils/tree/master/packages/is/isEmail)|Validates a string as email address.|
|[isEmpty](https://github.com/georapbox/js-utils/tree/master/packages/is/isEmpty)|Checks if a value is an empty object, collection, map, or set.|
|[isEven](https://github.com/georapbox/js-utils/tree/master/packages/is/isEven)|Checks if a value is even.|
|[isFalse](https://github.com/georapbox/js-utils/tree/master/packages/is/isFalse)|Checks if a value is `false` (strict equality).|
|[isFalsy](https://github.com/georapbox/js-utils/tree/master/packages/is/isFalsy)|Checks if a value is falsy.|
|[isFiniteNum](https://github.com/georapbox/js-utils/tree/master/packages/is/isFiniteNum)|Checks if a value is a finite number.|
|[isFlatArray](https://github.com/georapbox/js-utils/tree/master/packages/is/isFlatArray)|Checks if a value is a flat array.|
|[isFunction](https://github.com/georapbox/js-utils/tree/master/packages/is/isFunction)|Checks if a value is a function.|
|[isHexadecimal](https://github.com/georapbox/js-utils/tree/master/packages/is/isHexadecimal)|Checks if a value matches a hexadecimal regular expression.|
|[isHexColor](https://github.com/georapbox/js-utils/tree/master/packages/is/isHexColor)|Checks if a value matches a hexadecimal color regular expression.|
|[isInteger](https://github.com/georapbox/js-utils/tree/master/packages/is/isInteger)|Checks if a value is an integer number.|
|[isIterable](https://github.com/georapbox/js-utils/tree/master/packages/is/isIterable)|Checks if a value is an iterable.|
|[isMap](https://github.com/georapbox/js-utils/tree/master/packages/is/isMap)|Checks if a value is classified as a Map object.|
|[isNaN](https://github.com/georapbox/js-utils/tree/master/packages/is/isNaN)|Determines whether the passed value is `NaN` and its type is `Number`.|
|[isNull](https://github.com/georapbox/js-utils/tree/master/packages/is/isNull)|Checks if a value is `null`.|
|[isNullish](https://github.com/georapbox/js-utils/tree/master/packages/is/isNullish)|Checks if a value is `null` or `undefined`.|
|[isNumber](https://github.com/georapbox/js-utils/tree/master/packages/is/isNumber)|Checks if a value is a number.|
|[isObject](https://github.com/georapbox/js-utils/tree/master/packages/is/isObject)|Checks if a value is the [language type](https://262.ecma-international.org/#sec-ecmascript-language-types) of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, `new String('')`).|
|[isObjectLike](https://github.com/georapbox/js-utils/tree/master/packages/is/isObjectLike)|Checks if a value is object-like. A value is object-like if it's not `null` and has a `typeof` result of "object".|
|[isOdd](https://github.com/georapbox/js-utils/tree/master/packages/is/isOdd)|Checks if a value is odd.|
|[isPlainObject](https://github.com/georapbox/js-utils/tree/master/packages/is/isPlainObject)|Checks if a value is a plain object. An object is considered to be plain if it's created by `{}`, `new Object()`, or `Object.create(null)`.|
|[isPrimitive](https://github.com/georapbox/js-utils/tree/master/packages/is/isPrimitive)|Checks if a value is a primitive data type.|
|[isPromise](https://github.com/georapbox/js-utils/tree/master/packages/is/isPromise)|Check if a value is a native ES2015 Promise.|
|[isRegexp](https://github.com/georapbox/js-utils/tree/master/packages/is/isRegexp)|Checks if a value is a regular expression.|
|[isSafeInteger](https://github.com/georapbox/js-utils/tree/master/packages/is/isSafeInteger)|Checks if an integer number is in the safe range i.e., it is correctly represented by JavaScript (where all numbers, including integer numbers, are technically floating point number).|
|[isSet](https://github.com/georapbox/js-utils/tree/master/packages/is/isSet)|Checks if a value is classified as a Set object.|
|[isString](https://github.com/georapbox/js-utils/tree/master/packages/is/isString)|Checks if a value is a string.|
|[isSymbol](https://github.com/georapbox/js-utils/tree/master/packages/is/isSymbol)|Checks if a value is classified as a Symbol primitive.|
|[isTrue](https://github.com/georapbox/js-utils/tree/master/packages/is/isTrue)|Checks if a value is `true` (strict equality).|
|[isTruthy](https://github.com/georapbox/js-utils/tree/master/packages/is/isTruthy)|Checks if a value is truthy.|
|[isUndefined](https://github.com/georapbox/js-utils/tree/master/packages/is/isUndefined)|Checks if a value is `undefined`.|
|[isWeakMap](https://github.com/georapbox/js-utils/tree/master/packages/is/isWeakMap)|Checks if a value is classified as a WeakMap object.|
|[isWeakSet](https://github.com/georapbox/js-utils/tree/master/packages/is/isWeakSet)|Checks if a value is classified as a WeakSet object.|


## Math

|Name|Description|
|--------|-----------|
|[average](https://github.com/georapbox/js-utils/tree/master/packages/math/average)|Calculates the average of a set of numbers.|
|[clamp](https://github.com/georapbox/js-utils/tree/master/packages/math/clamp)|Clamps number within the inclusive lower and upper bounds.|
|[degreesToRadians](https://github.com/georapbox/js-utils/tree/master/packages/math/degreesToRadians)|Converts degrees to radians.|
|[inRange](https://github.com/georapbox/js-utils/tree/master/packages/math/inRange)|Checks if a number is between `min` and `max` including.|
|[lerp](https://github.com/georapbox/js-utils/tree/master/packages/math/lerp)|Takes a normalized value within a range of values and converts it to a numerical value that the normalized value points to.|
|[normalize](https://github.com/georapbox/js-utils/tree/master/packages/math/normalize)|Takes a value within a range of values and converts that value to a number from 0 to 1 that indicates where it lies in that range.|
|[max](https://github.com/georapbox/js-utils/tree/master/packages/math/max)|Returns the largest of zero or more numbers.|
|[min](https://github.com/georapbox/js-utils/tree/master/packages/math/min)|Returns the smallest of zero or more numbers.|
|[radiansToDegrees](https://github.com/georapbox/js-utils/tree/master/packages/math/radiansToDegrees)|Converts radians to degrees.|
|[randomDist](https://github.com/georapbox/js-utils/tree/master/packages/math/randomDist)|Returns a weighted random number (that tends to the center) of a range of numbers based on the number of the iterations set.|
|[randomInt](https://github.com/georapbox/js-utils/tree/master/packages/math/randomInt)|Returns a pseudo-random integer number between a min (inclusive) and a max (inclusive) value.|
|[randomRange](https://github.com/georapbox/js-utils/tree/master/packages/math/randomRange)|Returns a pseudo-random number between a min (inclusive) and a max (exclusive) value.|
|[roundToNearest](https://github.com/georapbox/js-utils/tree/master/packages/math/roundToNearest)|Rounds a number to the nearest multiple of a value provided.|
|[roundToPlaces](https://github.com/georapbox/js-utils/tree/master/packages/math/roundToPlaces)|Rounds a number to a number of desired places.|


## DOM

|Name|Description|
|--------|-----------|
|[cookie](https://github.com/georapbox/js-utils/tree/master/packages/dom/cookie)|Create, read and delete cookies.|
|[mediaQuery](https://github.com/georapbox/js-utils/tree/master/packages/dom/mediaQuery)|Determines if the document matches a media query string.|
|[preloadImages](https://github.com/georapbox/js-utils/tree/master/packages/dom/preloadImages)|Asynchronously load images to browser so that can be cached.|
|[whichAnimationEnd](https://github.com/georapbox/js-utils/tree/master/packages/dom/whichAnimationEnd)|Detects the supported property name for the "animationend" event.|
|[whichTransitionEnd](https://github.com/georapbox/js-utils/tree/master/packages/dom/whichTransitionEnd)|Detects the supported property name for the "transitionend" event.|


## HTML5 Canvas

|Name|Description|
|--------|-----------|
|[convertImageToBase64](https://github.com/georapbox/js-utils/tree/master/packages/canvas/convertImageToBase64)|Converts an image's content to Data URI scheme.|
|[highResolutionCanvas](https://github.com/georapbox/js-utils/tree/master/packages/canvas/highResolutionCanvas)|Processes an `HTMLCanvasElement` by downsampling on the canvas to ensure that the drawn visuals do not look blurry on high-DPI screens.|


## Installation

- To clone the repository, run: `git clone https://github.com/georapbox/js-utils.git`
- To install dev dependancies, (from the root folder of the project) run: `$ npm install`

## Testing

```sh
$ npm run test
```

## License

[The MIT License (MIT)](https://georapbox.mit-license.org/@2015)
