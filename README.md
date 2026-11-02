[![Build](https://github.com/georapbox/js-utils/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/georapbox/js-utils/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/georapbox/js-utils/badge.svg?branch=master)](https://coveralls.io/github/georapbox/js-utils?branch=master)
[![License](https://img.shields.io/github/license/georapbox/js-utils?color=blue)](https://github.com/georapbox/js-utils/blob/master/LICENSE)

# js-utils

This repository contains a collection of simple, standalone JavaScript utility functions that I've used over the years in various projects. The goal is to provide useful functions that developers can easily use, modify, and adapt to their own needs, rather than offering a complete library.

The utilities are organized into categories based on their functionality, such as arrays, strings, objects, functions, and more. Each utility is self-contained and can be used independently.

## Table of Contents

### Array

| Name | Description |
|------|-------------|
|[chunk](./src/array/chunk)|Creates an array of elements split into groups the length of size specified.|
|[compact](./src/array/compact)|Creates an array with all falsy values removed. 'false', 'null', '0', '""', 'undefined', and 'NaN' are falsy.|
|[diff](./src/array/diff)|Returns an array with only the unique values from the first array, by excluding all values from the second array using strict equality for comparisons.|
|[drop](./src/array/drop)|Creates a slice of `array` with `n` elements dropped from the beginning.|
|[dropRight](./src/array/dropRight)|Creates a slice of `array` with `n` elements dropped from the end.|
|[dropRightWhile](./src/array/dropRightWhile)|Creates a slice of `array` excluding elements dropped from the end, until `predicate` returns falsy.|
|[dropWhile](./src/array/dropWhile)|Creates a slice of `array` excluding elements dropped from the beginning, until `predicate` returns falsy.|
|[groupBy](./src/array/groupBy)|Creates an object composed of keys generated from the results of running each element of `array` through `iteratee`.|
|[intersect](./src/array/intersect)|Creates an array of unique values that are included in all given arrays.|
|[insert](./src/array/insert)|Inserts one or more elements to array at specific index.|
|[move](./src/array/move)|Move an array element to a different position.|
|[partition](./src/array/partition)|Creates an array of elements split into two groups (arrays) depending on the result of a predicated function invoked for each iteration.|
|[pluck](./src/array/pluck)|Retrieves the value of a specified property from all elements in an array.|
|[remove](./src/array/remove)|Removes one or more elements from an array at the specified index(es).|
|[shuffle](./src/array/shuffle)|Returns a new array with its elements' order randomized, using the Fisher-Yates (aka Knuth) Shuffle algorithm.|
|[tail](./src/array/tail)|Gets all but the first element of array.|
|[take](./src/array/take)|Creates a slice of array with `n` items taken from the beginning.|
|[takeRight](./src/array/takeRight)|Creates a slice of array with `n` items taken from the end.|
|[takeRightWhile](./src/array/takeRightWhile)|Creates a slice of `array` with elements taken from the end, until `predicate` returns falsy.|
|[takeWhile](./src/array/takeWhile)|Creates a slice of `array` with elements taken from the beginning, until `predicate` returns falsy.|
|[sort](./src/array/sort)|Sorts an **array of primitive values**.|
|[sortBy](./src/array/sortBy)|Sorts an **array of objects** by a property.|
|[uniq](./src/array/uniq)|Creates a duplicate-free version of an array, using SameValueZero for equality comparisons.|
|[uniqBy](./src/array/uniqBy)|Creates a dupliate free array by accepting an `iteratee` which is invoked for each element in array.|
|[zip](./src/array/zip)|Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.|

### String

| Name | Description |
|------|-------------|
|[camelCase](./src/string/camelCase)|Converts a string to [camel case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles), eg `'theQuickBrownFoxJumpsOverTheLazyDog'`.|
|[capitalize](./src/string/capitalize)|Capitalizes the first character of a string (Optionally, converts the rest of the string to lower case).|
|[classnames](./src/string/classnames)|Creates a string by conditionally joining classNames together.|
|[collapseWhitespace](./src/string/collapseWhitespace)|Converts all adjacent whitespace characters to a single space.|
|[deburr](./src/string/deburr)|Deburrs a string by converting latin-1 supplementary letters to basic latin letters and removing combining diacritical marks.|
|[escapeHTML](./src/string/escapeHTML)|Converts the characters `&`, `<`, `>`, `"` and `'` in a string to their corresponding HTML entities.|
|[escapeRegExp](./src/string/escapeRegExp)|Escapes `RegExp` special characters in a string.|
|[kebabCase](./src/string/kebabCase)|Converts a string to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles), eg `'the-quick-brown-fox-jumps-over-the-lazy-dog'`.|
|[lines](./src/string/lines)|Returns an array with the lines of a a string.|
|[numberFormat](./src/string/numberFormat)|Formats a number based on the number of decimal points, the decimal separator and the thousands separator.|
|[pascalCase](./src/string/pascalCase)|Converts a string to [pascal case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles), eg `'TheQuickBrownFoxJumpsOverTheLazyDog'`.|
|[randomString](./src/string/randomString)|Generates a pseudo-random string of specific `length` allowing a set of characters specified by `chars`.|
|[removePrefix](./src/string/removePrefix)|Removes substring (prefix) from start of a string.|
|[removeSuffix](./src/string/removeSuffix)|Removes substring (suffix) from end of a string.|
|[snakeCase](./src/string/snakeCase)|Converts a string to [snake case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles), eg `'the_quick_brown_fox_jumps_over_the_lazy_dog'`.|
|[squash](./src/string/squash)|Removes all spaces from a string; optionally removes any escape sequences such as `\t`, `\n`, `\f`, `\r` and `\v`.|
|[strip](./src/string/strip)|Returns a new string with all occurrences of arguments passed removed.|
|[stripHTML](./src/string/stripHTML)|Returns a new string with all HTML tags removed.|
|[stripPunctuation](./src/string/stripPunctuation)|Returns a new string with all of punctuation removed.|
|[substringAfter](./src/string/substringAfter)|Returns a substring after a specific sequence of character(s).|
|[substringBefore](./src/string/substringBefore)|Returns a substring before a specific sequence of character(s).|
|[supplant](./src/string/supplant)|Performs variable substitution in a string.|
|[truncate](./src/string/truncate)|Truncates a string based on character count.|
|[unescapeHTML](./src/string/unescapeHTML)|Converts the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#34` and `&#39;` in a string to their corresponding characters.|
|[words](./src/string/words)|Splits string into an array of its words.|

### Number

| Name | Description |
|------|-------------|
|[average](./src/number/average)|Calculates the average of a set of numbers.|
|[clamp](./src/number/clamp)|Clamps number within the inclusive lower and upper bounds.|
|[degreesToRadians](./src/number/degreesToRadians)|Converts degrees to radians.|
|[inRange](./src/number/inRange)|Checks if a number is between `min` and `max` including.|
|[lerp](./src/number/lerp)|Takes a normalized value within a range of values and converts it to a numerical value that the normalized value points to.|
|[normalize](./src/number/normalize)|Takes a value within a range of values and converts that value to a number from 0 to 1 that indicates where it lies in that range.|
|[max](./src/number/max)|Returns the largest of zero or more numbers.|
|[min](./src/number/min)|Returns the smallest of zero or more numbers.|
|[radiansToDegrees](./src/number/radiansToDegrees)|Converts radians to degrees.|
|[randomDist](./src/number/randomDist)|Returns a weighted random number (that tends to the center) of a range of numbers based on the number of the iterations set.|
|[randomInt](./src/number/randomInt)|Returns a pseudo-random integer number between a min (inclusive) and a max (inclusive) value.|
|[randomRange](./src/number/randomRange)|Returns a pseudo-random number between a min (inclusive) and a max (exclusive) value.|
|[roundToNearest](./src/number/roundToNearest)|Rounds a number to the nearest multiple of a value provided.|
|[roundToPlaces](./src/number/roundToPlaces)|Rounds a number to a number of desired places.|

### Object

| Name | Description |
|------|-------------|
|[get](./src/object/get)|Gets the `value` at path of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.|
|[omit](./src/object/omit)|Creates an object composed of the own enumerable (not inherited) property paths of object that are not omitted.|
|[pick](./src/object/pick)|Creates an object composed of the picked object properties.|
|[pickBy](./src/object/pickBy)|Creates an object composed of the object enumerable properties that predicate returns truthy for.|
|[trueTypeOf](./src/object/trueTypeOf)|Determines the true type of a value using `Object.prototype.toString.call()`.|

### Function

| Name | Description |
|------|-------------|
|[after](./src/function/after)|Creates a function that invokes `fn` once it's called `n` or more times.|
|[ary](./src/function/ary)|Creates a function that accepts up to `n` arguments, ignoring any additional arguments.|
|[before](./src/function/before)|Creates a function that invokes `fn` while it’s called less than `n` times.|
|[compose](./src/function/compose)|Performs right-to-left function composition.|
|[curry](./src/function/curry)|Returns a curried equivalent of the provided function.|
|[debounce](./src/function/debounce)|Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for 'n' milliseconds.|
|[flip](./src/function/flip)|Creates a function that invokes the original function with its parameters reversed.|
|[negate](./src/function/negate)|Creates a function that negates the result of the predicate `fn`.|
|[once](./src/function/once)|Ensure a given functionality only runs once.|
|[partial](./src/function/partial)|Creates a new function that invokes the provided function with partials prepended to the arguments it receives.|
|[partialRight](./src/function/partialRight)|Creates a new function that invokes the provided function with partials appended to the arguments it receives.|
|[pipe](./src/function/pipe)|Performs left-to-right function composition.|
|[throttle](./src/function/throttle)|Limits the number of times a function can be called in a given period.|
|[unary](./src/function/unary)|Creates a function that accepts up to one argument, ignoring any additional arguments.|

### Is

| Name | Description |
|------|-------------|
|[isArray](./src/is/isArray)|Checks if a value is an array.|
|[isArrayLike](./src/is/isArrayLike)|Checks if a value is array-like.|
|[isArrayLikeObject](./src/is/isArrayLikeObject)|Checks if a value is array-like and object as well.|
|[isBoolean](./src/is/isBoolean)|Checks if a value is boolean.|
|[isDate](./src/is/isDate)|Checks if a value is a date object.|
|[isElement](./src/is/isElement)|Checks if a value is a DOM element.|
|[isEmail](./src/is/isEmail)|Validates a string as email address.|
|[isEmpty](./src/is/isEmpty)|Checks if a value is an empty object, collection, map, or set.|
|[isEven](./src/is/isEven)|Checks if a value is even.|
|[isFalse](./src/is/isFalse)|Checks if a value is `false` (strict equality).|
|[isFalsy](./src/is/isFalsy)|Checks if a value is falsy.|
|[isFiniteNum](./src/is/isFiniteNum)|Checks if a value is a finite number.|
|[isFlatArray](./src/is/isFlatArray)|Checks if a value is a flat array.|
|[isFunction](./src/is/isFunction)|Checks if a value is a function.|
|[isHexadecimal](./src/is/isHexadecimal)|Checks if a value matches a hexadecimal regular expression.|
|[isHexColor](./src/is/isHexColor)|Checks if a value matches a hexadecimal color regular expression.|
|[isInteger](./src/is/isInteger)|Checks if a value is an integer number.|
|[isIterable](./src/is/isIterable)|Checks if a value is an iterable.|
|[isMap](./src/is/isMap)|Checks if a value is classified as a Map object.|
|[isNaN](./src/is/isNaN)|Determines whether the passed value is `NaN` and its type is `Number`.|
|[isNull](./src/is/isNull)|Checks if a value is `null`.|
|[isNullish](./src/is/isNullish)|Checks if a value is `null` or `undefined`.|
|[isNumber](./src/is/isNumber)|Checks if a value is a number.|
|[isObject](./src/is/isObject)|Checks if a value is the [language type](https://262.ecma-international.org/#sec-ecmascript-language-types) of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, `new String('')`).|
|[isObjectLike](./src/is/isObjectLike)|Checks if a value is object-like. A value is object-like if it's not `null` and has a `typeof` result of "object".|
|[isOdd](./src/is/isOdd)|Checks if a value is odd.|
|[isPlainObject](./src/is/isPlainObject)|Checks if a value is a plain object. An object is considered to be plain if it's created by `{}`, `new Object()`, or `Object.create(null)`.|
|[isPrimitive](./src/is/isPrimitive)|Checks if a value is a primitive data type.|
|[isPromise](./src/is/isPromise)|Check if a value is a native ES2015 Promise.|
|[isRegexp](./src/is/isRegexp)|Checks if a value is a regular expression.|
|[isSafeInteger](./src/is/isSafeInteger)|Checks if an integer number is in the safe range i.e., it is correctly represented by JavaScript (where all numbers, including integer numbers, are technically floating point number).|
|[isSet](./src/is/isSet)|Checks if a value is classified as a Set object.|
|[isString](./src/is/isString)|Checks if a value is a string.|
|[isSymbol](./src/is/isSymbol)|Checks if a value is classified as a Symbol primitive.|
|[isTrue](./src/is/isTrue)|Checks if a value is `true` (strict equality).|
|[isTruthy](./src/is/isTruthy)|Checks if a value is truthy.|
|[isUndefined](./src/is/isUndefined)|Checks if a value is `undefined`.|
|[isWeakMap](./src/is/isWeakMap)|Checks if a value is classified as a WeakMap object.|
|[isWeakSet](./src/is/isWeakSet)|Checks if a value is classified as a WeakSet object.|

### DOM

| Name | Description |
|------|-------------|
|[convertImageToBase64](./src/dom/convertImageToBase64)|Converts an image's content to Data URI scheme.|
|[cookie](./src/dom/cookie)|Create, read and delete cookies.|
|[mediaQuery](./src/dom/mediaQuery)|Determines if the document matches a media query string.|
|[preloadImages](./src/dom/preloadImages)|Asynchronously load images to browser so that can be cached.|
|[setupHiDPICanvas](./src/dom/setupHiDPICanvas)|Configures an HTMLCanvasElement for sharp rendering on high-DPI screens.|

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
