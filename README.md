![build](https://github.com/georapbox/js-utils/workflows/build/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/georapbox/js-utils/badge.svg?branch=master)](https://coveralls.io/github/georapbox/js-utils?branch=master)
[![License](https://img.shields.io/github/license/georapbox/js-utils?color=blue)](https://github.com/georapbox/js-utils/blob/master/LICENSE)

# js-utils

This repository contains a set of simple, standalone JavaScript utility functions that I've used throughout the years in various projects. It's meant to provide useful tools that developers can easily modify and adapt for their own needs. The focus is on offering individual functions that can be changed as needed, rather than providing a full library.

The utilities are organized into packages based on their functionality. Each package contains a set of functions that are related to a specific area of development, such as arrays, strings, objects, functions, etc.

## Table of Contents

### Array

| Name | Description |
|------|-------------|
|[chunk](./packages/array/chunk)|Creates an array of elements split into groups the length of size specified.|
|[compact](./packages/array/compact)|Creates an array with all falsy values removed. 'false', 'null', '0', '""', 'undefined', and 'NaN' are falsy.|
|[diff](./packages/array/diff)|Returns an array with only the unique values from the first array, by excluding all values from the second array using strict equality for comparisons.|
|[drop](./packages/array/drop)|Creates a slice of `array` with `n` elements dropped from the beginning.|
|[dropRight](./packages/array/dropRight)|Creates a slice of `array` with `n` elements dropped from the end.|
|[dropRightWhile](./packages/array/dropRightWhile)|Creates a slice of `array` excluding elements dropped from the end, until `predicate` returns falsy.|
|[dropWhile](./packages/array/dropWhile)|Creates a slice of `array` excluding elements dropped from the beginning, until `predicate` returns falsy.|
|[groupBy](./packages/array/groupBy)|Creates an object composed of keys generated from the results of running each element of `array` through `iteratee`.|
|[intersect](./packages/array/intersect)|Creates an array of unique values that are included in all given arrays.|
|[insert](./packages/array/insert)|Inserts one or more elements to array at specific index.|
|[move](./packages/array/move)|Move an array element to a different position.|
|[partition](./packages/array/partition)|Creates an array of elements split into two groups (arrays) depending on the result of a predicated function invoked for each iteration.|
|[pluck](./packages/array/pluck)|Retrieves the value of a specified property from all elements in an array.|
|[remove](./packages/array/remove)|Removes one or more elements from an array at the specified index(es).|
|[shuffle](./packages/array/shuffle)|Returns a new array with its elements' order randomized, using the Fisher-Yates (aka Knuth) Shuffle algorithm.|
|[tail](./packages/array/tail)|Gets all but the first element of array.|
|[take](./packages/array/take)|Creates a slice of array with `n` items taken from the beginning.|
|[takeRight](./packages/array/takeRight)|Creates a slice of array with `n` items taken from the end.|
|[takeRightWhile](./packages/array/takeRightWhile)|Creates a slice of `array` with elements taken from the end, until `predicate` returns falsy.|
|[takeWhile](./packages/array/takeWhile)|Creates a slice of `array` with elements taken from the beginning, until `predicate` returns falsy.|
|[sort](./packages/array/sort)|Sorts an **array of primitive values**.|
|[sortBy](./packages/array/sortBy)|Sorts an **array of objects** by a property.|
|[uniq](./packages/array/uniq)|Creates a duplicate-free version of an array, using SameValueZero for equality comparisons.|
|[uniqBy](./packages/array/uniqBy)|Creates a dupliate free array by accepting an `iteratee` which is invoked for each element in array.|
|[zip](./packages/array/zip)|Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.|

### String

| Name | Description |
|------|-------------|
|[camelCase](./packages/string/camelCase)|Converts a string to [camel case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles), eg `'theQuickBrownFoxJumpsOverTheLazyDog'`.|
|[capitalize](./packages/string/capitalize)|Capitalizes the first character of a string (Optionally, converts the rest of the string to lower case).|
|[classnames](./packages/string/classnames)|Creates a string by conditionally joining classNames together.|
|[collapseWhitespace](./packages/string/collapseWhitespace)|Converts all adjacent whitespace characters to a single space.|
|[deburr](./packages/string/deburr)|Deburrs a string by converting latin-1 supplementary letters to basic latin letters and removing combining diacritical marks.|
|[escapeHTML](./packages/string/escapeHTML)|Converts the characters `&`, `<`, `>`, `"` and `'` in a string to their corresponding HTML entities.|
|[escapeRegExp](./packages/string/escapeRegExp)|Escapes `RegExp` special characters in a string.|
|[kebabCase](./packages/string/kebabCase)|Converts a string to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles), eg `'the-quick-brown-fox-jumps-over-the-lazy-dog'`.|
|[lines](./packages/string/lines)|Returns an array with the lines of a a string.|
|[numberFormat](./packages/string/numberFormat)|Formats a number based on the number of decimal points, the decimal separator and the thousands separator.|
|[pascalCase](./packages/string/pascalCase)|Converts a string to [pascal case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles), eg `'TheQuickBrownFoxJumpsOverTheLazyDog'`.|
|[randomString](./packages/string/randomString)|Generates a pseudo-random string of specific `length` allowing a set of characters specified by `chars`.|
|[removePrefix](./packages/string/removePrefix)|Removes substring (prefix) from start of a string.|
|[removeSuffix](./packages/string/removeSuffix)|Removes substring (suffix) from end of a string.|
|[snakeCase](./packages/string/snakeCase)|Converts a string to [snake case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles), eg `'the_quick_brown_fox_jumps_over_the_lazy_dog'`.|
|[squash](./packages/string/squash)|Removes all spaces from a string; optionally removes any escape sequences such as `\t`, `\n`, `\f`, `\r` and `\v`.|
|[strip](./packages/string/strip)|Returns a new string with all occurrences of arguments passed removed.|
|[stripHTML](./packages/string/stripHTML)|Returns a new string with all HTML tags removed.|
|[stripPunctuation](./packages/string/stripPunctuation)|Returns a new string with all of punctuation removed.|
|[substringAfter](./packages/string/substringAfter)|Returns a substring after a specific sequence of character(s).|
|[substringBefore](./packages/string/substringBefore)|Returns a substring before a specific sequence of character(s).|
|[supplant](./packages/string/supplant)|Performs variable substitution in a string.|
|[truncate](./packages/string/truncate)|Truncates a string based on character count.|
|[unescapeHTML](./packages/string/unescapeHTML)|Converts the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#34` and `&#39;` in a string to their corresponding characters.|
|[words](./packages/string/words)|Splits string into an array of its words.|

### Number

| Name | Description |
|------|-------------|
|[average](./packages/number/average)|Calculates the average of a set of numbers.|
|[clamp](./packages/number/clamp)|Clamps number within the inclusive lower and upper bounds.|
|[degreesToRadians](./packages/number/degreesToRadians)|Converts degrees to radians.|
|[inRange](./packages/number/inRange)|Checks if a number is between `min` and `max` including.|
|[lerp](./packages/number/lerp)|Takes a normalized value within a range of values and converts it to a numerical value that the normalized value points to.|
|[normalize](./packages/number/normalize)|Takes a value within a range of values and converts that value to a number from 0 to 1 that indicates where it lies in that range.|
|[max](./packages/number/max)|Returns the largest of zero or more numbers.|
|[min](./packages/number/min)|Returns the smallest of zero or more numbers.|
|[radiansToDegrees](./packages/number/radiansToDegrees)|Converts radians to degrees.|
|[randomDist](./packages/number/randomDist)|Returns a weighted random number (that tends to the center) of a range of numbers based on the number of the iterations set.|
|[randomInt](./packages/number/randomInt)|Returns a pseudo-random integer number between a min (inclusive) and a max (inclusive) value.|
|[randomRange](./packages/number/randomRange)|Returns a pseudo-random number between a min (inclusive) and a max (exclusive) value.|
|[roundToNearest](./packages/number/roundToNearest)|Rounds a number to the nearest multiple of a value provided.|
|[roundToPlaces](./packages/number/roundToPlaces)|Rounds a number to a number of desired places.|

### Object

| Name | Description |
|------|-------------|
|[get](./packages/object/get)|Gets the `value` at path of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.|
|[omit](./packages/object/omit)|Creates an object composed of the own enumerable (not inherited) property paths of object that are not omitted.|
|[pick](./packages/object/pick)|Creates an object composed of the picked object properties.|
|[pickBy](./packages/object/pickBy)|Creates an object composed of the object enumerable properties that predicate returns truthy for.|
|[trueTypeOf](./packages/object/trueTypeOf)|Determines the true type of a value using `Object.prototype.toString.call()`.|

### Function

| Name | Description |
|------|-------------|
|[after](./packages/function/after)|Creates a function that invokes `fn` once it's called `n` or more times.|
|[ary](./packages/function/ary)|Creates a function that accepts up to `n` arguments, ignoring any additional arguments.|
|[before](./packages/function/before)|Creates a function that invokes `fn` while it’s called less than `n` times.|
|[compose](./packages/function/compose)|Performs right-to-left function composition.|
|[curry](./packages/function/curry)|Returns a curried equivalent of the provided function.|
|[debounce](./packages/function/debounce)|Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for 'n' milliseconds.|
|[flip](./packages/function/flip)|Creates a function that invokes the original function with its parameters reversed.|
|[negate](./packages/function/negate)|Creates a function that negates the result of the predicate `fn`.|
|[once](./packages/function/once)|Ensure a given functionality only runs once.|
|[partial](./packages/function/partial)|Creates a new function that invokes the provided function with partials prepended to the arguments it receives.|
|[partialRight](./packages/function/partialRight)|Creates a new function that invokes the provided function with partials appended to the arguments it receives.|
|[pipe](./packages/function/pipe)|Performs left-to-right function composition.|
|[throttle](./packages/function/throttle)|Limits the number of times a function can be called in a given period.|
|[unary](./packages/function/unary)|Creates a function that accepts up to one argument, ignoring any additional arguments.|

### Is

| Name | Description |
|------|-------------|
|[isArray](./packages/is/isArray)|Checks if a value is an array.|
|[isArrayLike](./packages/is/isArrayLike)|Checks if a value is array-like.|
|[isArrayLikeObject](./packages/is/isArrayLikeObject)|Checks if a value is array-like and object as well.|
|[isBoolean](./packages/is/isBoolean)|Checks if a value is boolean.|
|[isDate](./packages/is/isDate)|Checks if a value is a date object.|
|[isElement](./packages/is/isElement)|Checks if a value is a DOM element.|
|[isEmail](./packages/is/isEmail)|Validates a string as email address.|
|[isEmpty](./packages/is/isEmpty)|Checks if a value is an empty object, collection, map, or set.|
|[isEven](./packages/is/isEven)|Checks if a value is even.|
|[isFalse](./packages/is/isFalse)|Checks if a value is `false` (strict equality).|
|[isFalsy](./packages/is/isFalsy)|Checks if a value is falsy.|
|[isFiniteNum](./packages/is/isFiniteNum)|Checks if a value is a finite number.|
|[isFlatArray](./packages/is/isFlatArray)|Checks if a value is a flat array.|
|[isFunction](./packages/is/isFunction)|Checks if a value is a function.|
|[isHexadecimal](./packages/is/isHexadecimal)|Checks if a value matches a hexadecimal regular expression.|
|[isHexColor](./packages/is/isHexColor)|Checks if a value matches a hexadecimal color regular expression.|
|[isInteger](./packages/is/isInteger)|Checks if a value is an integer number.|
|[isIterable](./packages/is/isIterable)|Checks if a value is an iterable.|
|[isMap](./packages/is/isMap)|Checks if a value is classified as a Map object.|
|[isNaN](./packages/is/isNaN)|Determines whether the passed value is `NaN` and its type is `Number`.|
|[isNull](./packages/is/isNull)|Checks if a value is `null`.|
|[isNullish](./packages/is/isNullish)|Checks if a value is `null` or `undefined`.|
|[isNumber](./packages/is/isNumber)|Checks if a value is a number.|
|[isObject](./packages/is/isObject)|Checks if a value is the [language type](https://262.ecma-international.org/#sec-ecmascript-language-types) of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, `new String('')`).|
|[isObjectLike](./packages/is/isObjectLike)|Checks if a value is object-like. A value is object-like if it's not `null` and has a `typeof` result of "object".|
|[isOdd](./packages/is/isOdd)|Checks if a value is odd.|
|[isPlainObject](./packages/is/isPlainObject)|Checks if a value is a plain object. An object is considered to be plain if it's created by `{}`, `new Object()`, or `Object.create(null)`.|
|[isPrimitive](./packages/is/isPrimitive)|Checks if a value is a primitive data type.|
|[isPromise](./packages/is/isPromise)|Check if a value is a native ES2015 Promise.|
|[isRegexp](./packages/is/isRegexp)|Checks if a value is a regular expression.|
|[isSafeInteger](./packages/is/isSafeInteger)|Checks if an integer number is in the safe range i.e., it is correctly represented by JavaScript (where all numbers, including integer numbers, are technically floating point number).|
|[isSet](./packages/is/isSet)|Checks if a value is classified as a Set object.|
|[isString](./packages/is/isString)|Checks if a value is a string.|
|[isSymbol](./packages/is/isSymbol)|Checks if a value is classified as a Symbol primitive.|
|[isTrue](./packages/is/isTrue)|Checks if a value is `true` (strict equality).|
|[isTruthy](./packages/is/isTruthy)|Checks if a value is truthy.|
|[isUndefined](./packages/is/isUndefined)|Checks if a value is `undefined`.|
|[isWeakMap](./packages/is/isWeakMap)|Checks if a value is classified as a WeakMap object.|
|[isWeakSet](./packages/is/isWeakSet)|Checks if a value is classified as a WeakSet object.|

### DOM

| Name | Description |
|------|-------------|
|[convertImageToBase64](./packages/dom/convertImageToBase64)|Converts an image's content to Data URI scheme.|
|[cookie](./packages/dom/cookie)|Create, read and delete cookies.|
|[mediaQuery](./packages/dom/mediaQuery)|Determines if the document matches a media query string.|
|[preloadImages](./packages/dom/preloadImages)|Asynchronously load images to browser so that can be cached.|
|[setupHiDPICanvas](./packages/dom/setupHiDPICanvas)|Configures an HTMLCanvasElement for sharp rendering on high-DPI screens.|

## Development setup

### Prerequisites

The project requires `Node.js` and `npm` to be installed on your environment. Preferably, use [nvm](https://github.com/nvm-sh/nvm) Node Version Manager and use the version of Node.js specified in the `.nvmrc` file by running `nvm use`.

### Clone the repository

```sh
git clone https://github.com/georapbox/js-utils.git
cd js-utils
```

### Install development dependencies

```sh
npm install
```

### Testing

```sh
npm test
npm run test:watch # Run tests in watch mode
```

### Linting

Lint all JavaScript files using [Oxlint](https://oxc.rs/docs/guide/usage/linter.html):

```sh
npm run lint
```

### Formatting

Format all JavaScript files using [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html):

```sh
npm run fmt
```

Check formatting without modifying files:

```sh
npm run fmt:check
```

### Generate documentation

Run the following command from the repository root to generate Markdown documentation for a single file and print it to stdout.

```sh
npm run docs <path-to-file>
```

The file path must be relative to the repository root.

## License

[The MIT License (MIT)](./LICENSE)
