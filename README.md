[![Build](https://github.com/georapbox/js-utils/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/georapbox/js-utils/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/georapbox/js-utils?color=blue)](https://github.com/georapbox/js-utils/blob/main/LICENSE)

# js-utils

This repository contains a collection of simple, standalone JavaScript utility functions that I've used over the years in various projects. Most of these utilities cover functionality that JavaScript doesn't provide directly or that would otherwise require additional code. The goal is not to replace native APIs or offer a complete utility library, but to provide practical functions that developers can easily use, modify, and adapt to their own needs.

The utilities are listed alphabetically within each section for easy reference. Each utility is self-contained and can be used independently.

## Utilities

[Array](#array) · [DOM](#dom) · [Function](#function) · [Number](#number) · [Object](#object) · [String](#string)

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

### DOM

| Name | Description |
|------|-------------|
|[convertImageToBase64](./src/dom/convertImageToBase64)|Fetches an image and converts its content to a Base64-encoded Data URI.|
|[setupHiDPICanvas](./src/dom/setupHiDPICanvas)|Configures an HTMLCanvasElement for sharp rendering on high-DPI screens.|
|[subscribeMediaQuery](./src/dom/subscribeMediaQuery)|Subscribes to the matching state of a CSS media query.|

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

### String

| Name | Description |
|------|-------------|
|[classnames](./src/string/classnames)|Creates a string by conditionally joining class names with spaces.|
|[escapeHTML](./src/string/escapeHTML)|Escapes special HTML characters in a string.|
|[interpolate](./src/string/interpolate)|Replaces placeholders in a string with values from an object.|
|[lines](./src/string/lines)|Splits a string into an array of lines.|
|[removePrefix](./src/string/removePrefix)|Removes a prefix from the beginning of a string if present.|
|[removePunctuation](./src/string/removePunctuation)|Removes Unicode punctuation characters from a string.|
|[removeSuffix](./src/string/removeSuffix)|Removes a suffix from the end of a string if present.|
|[substringAfter](./src/string/substringAfter)|Returns the substring after the first occurrence of a delimiter.|
|[substringBefore](./src/string/substringBefore)|Returns the substring before the first occurrence of a delimiter.|
|[truncate](./src/string/truncate)|Truncates a string to the specified number of characters.|
|[unescapeHTML](./src/string/unescapeHTML)|Converts supported HTML entities to their corresponding characters.|
|[upperFirst](./src/string/upperFirst)|Uppercases the first character of a string without changing the rest.|
|[words](./src/string/words)|Extracts words from a string using locale-aware word segmentation.|

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
