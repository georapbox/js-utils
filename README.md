[![Build](https://github.com/georapbox/js-utils/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/georapbox/js-utils/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/georapbox/js-utils?color=blue)](https://github.com/georapbox/js-utils/blob/main/LICENSE)

# js-utils

This repository contains a collection of simple, standalone JavaScript utility functions that I've used over the years in various projects. The goal is to provide useful functions that developers can easily use, modify, and adapt to their own needs, rather than offering a complete library.

The utilities are organized into categories based on their functionality, such as arrays, strings, objects, functions, and more. Each utility is self-contained and can be used independently.

## Utilities

[Array](#array) · [String](#string) · [Number](#number) · [Object](#object) · [Function](#function) · [DOM](#dom)

### Array

| Name | Description |
|------|-------------|
|[chunk](./src/array/chunk)|Splits an array into chunks of the specified size.|
|[diff](./src/array/diff)|Creates a new array containing the values from the first array that are not present in the second array.|
|[drop](./src/array/drop)|Creates a slice of an array with `n` elements dropped from the beginning.|
|[dropRight](./src/array/dropRight)|Creates a slice of an array with `n` elements dropped from the end.|
|[dropRightWhile](./src/array/dropRightWhile)|Creates a new array excluding elements from the end of the input array while the predicate returns a truthy value.|
|[dropWhile](./src/array/dropWhile)|Creates a new array excluding elements from the beginning of the input array while the predicate returns a truthy value.|
|[intersect](./src/array/intersect)|Creates an array of unique values that are included in all given arrays.|
|[move](./src/array/move)|Creates a new array with an element moved from one index to another.|
|[partition](./src/array/partition)|Splits an array into two groups based on the result of a predicate.|
|[remove](./src/array/remove)|Creates a new array excluding elements at the specified indices.|
|[shuffle](./src/array/shuffle)|Creates a new array with its elements shuffled into a random order using the Fisher-Yates algorithm.|
|[take](./src/array/take)|Creates a slice of array with `n` items taken from the beginning.|
|[takeRight](./src/array/takeRight)|Creates a new array containing up to `n` elements from the end of the input array.|
|[takeRightWhile](./src/array/takeRightWhile)|Creates a slice of an array containing elements from the end until the predicate returns a falsy value.|
|[takeWhile](./src/array/takeWhile)|Creates a slice of an array containing elements from the beginning until the predicate returns a falsy value.|
|[uniqBy](./src/array/uniqBy)|Creates a duplicate-free array using an `iteratee` function to compute a unique key for each element.|
|[zip](./src/array/zip)|Creates a new array of grouped elements by combining values at the same index from each input array.|

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
|[average](./src/number/average)|Calculates the arithmetic mean of the provided numbers.|
|[clamp](./src/number/clamp)|Clamps a number within the inclusive minimum and maximum bounds.|
|[degreesToRadians](./src/number/degreesToRadians)|Converts an angle from degrees to radians.|
|[inRange](./src/number/inRange)|Checks whether a number is within an inclusive range.|
|[lerp](./src/number/lerp)|Performs linear interpolation between two numbers.|
|[normalize](./src/number/normalize)|Normalizes a number relative to a range, returning its position as an interpolation factor.|
|[radiansToDegrees](./src/number/radiansToDegrees)|Converts an angle from radians to degrees.|
|[randomDist](./src/number/randomDist)|Returns a random number that tends toward the center of a range.|
|[randomInt](./src/number/randomInt)|Returns a pseudo-random integer within an inclusive range.|
|[randomRange](./src/number/randomRange)|Returns a pseudo-random number within a range, including the lower bound and excluding the upper bound under normal floating-point arithmetic.|
|[roundToNearest](./src/number/roundToNearest)|Rounds a number to the nearest multiple of a given value.|
|[roundToPlaces](./src/number/roundToPlaces)|Rounds a number to the specified number of decimal places.|

### Object

| Name | Description |
|------|-------------|
|[get](./src/object/get)|Retrieves the value at a specified path within an object.|
|[omit](./src/object/omit)|Creates a new object excluding the specified own enumerable properties of the source object.|
|[pick](./src/object/pick)|Creates a new object containing the specified own enumerable properties of the source object.|
|[pickBy](./src/object/pickBy)|Creates a new object containing the own enumerable properties of the source object for which the predicate returns a truthy value.|

### Function

| Name | Description |
|------|-------------|
|[after](./src/function/after)|Creates a function that invokes `fn` after it has been called at least `n` times.|
|[ary](./src/function/ary)|Creates a function that invokes `fn` with at most `cap` arguments, ignoring any additional arguments.|
|[before](./src/function/before)|Creates a function that invokes `fn` while the number of calls is less than `n`.|
|[compose](./src/function/compose)|Creates a function that performs right-to-left function composition.|
|[curry](./src/function/curry)|Creates a curried function that collects arguments across multiple calls until the specified arity is reached.|
|[debounce](./src/function/debounce)|Creates a debounced function that delays invoking `fn` until `wait` milliseconds have elapsed since its last call.|
|[flip](./src/function/flip)|Creates a function that invokes `fn` with its arguments in reverse order.|
|[negate](./src/function/negate)|Creates a function that negates the truthiness of the result returned by `fn`.|
|[once](./src/function/once)|Creates a function that invokes `fn` at most once.|
|[partial](./src/function/partial)|Creates a function that invokes `fn` with the specified partial arguments prepended to the arguments provided when the returned function is called.|
|[partialRight](./src/function/partialRight)|Creates a function that invokes `fn` with the specified partial arguments appended to the arguments provided when the returned function is called.|
|[pipe](./src/function/pipe)|Creates a function that performs left-to-right function composition.|
|[throttle](./src/function/throttle)|Creates a throttled function that invokes `fn` at most once per `wait` milliseconds, apart from an initial leading-edge invocation.|

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

Run the following commands from the repository root to generate Markdown documentation from JSDoc comments.

Documentation is generated as a `README.md` file inside each utility's directory, replacing any existing file.

**Generate documentation for a single utility:**

```sh
npm run docs -- src/<category-directory>/<utility-directory>
```

**Generate documentation for an entire category:**

```sh
npm run docs -- src/<category-directory>
```

**Generate documentation for multiple categories:**

```sh
npm run docs -- src/<category-directory-1> src/<category-directory-2>
```

**Generate documentation for all utilities:**

```sh
npm run docs -- src
```

All arguments must be directory paths relative to the repository root, not individual file paths.

By convention, each utility's JavaScript file must have the same name as its containing directory (e.g., `drop/drop.js`). The script recursively scans the specified directories and generates documentation only for files following this naming convention.

### Git hooks

This repository includes a pre-commit hook that runs linting and formatting checks before each commit.

To enable the hook, run the following command from the repository root:

```sh
git config --local core.hooksPath .githooks
```

This configuration only needs to be applied once per clone and does not affect other repositories.

To disable the hook, run:

```sh
git config --local --unset core.hooksPath
```

## License

[The MIT License (MIT)](./LICENSE)
