# v2.0.0
- Rename `Strings>beginsWidth` to `Strings>startsWith` and use `String.prototype.startsWith` if available.


# v1.3.6
- Add `inRange` in **Numbers** category.
- Add `chunk` in **Arrays** category.


# v1.3.5
- Add `subStrBeforeChars` in **Strings** category.


# v1.3.4
- Add `zip` in **Arrays** category.


# v1.3.3
- Add `container` in **Objects** category.
- Add `partial` in **Misc** category.
- Minor refactor to `curry` function to accept an optional argument specifying the number of expected arguments in cases that the function's arity cannot be automatically determined.
- Refactor `shuffle` in **Arrays** category to return a copy of the original array and not shuffle in place.
Altering the original source made the function "impure".


# v1.3.2
- Add `compose` function to **Misc** category.
- Add `isEventsupported` function to **DOM** category.

# v1.3.1
- Add `CanvasContext` class to **HTML5 Canvas** category.
- Add `convertImageToBase64` function to **HTML5 Canvas** category.


# v1.3.0
- Add `stripPunctuation` function to **Strings** category.
- Add `lines` function to **Strings** category.


# v1.2.0
- Rename `isOdd`, `isEven`, `isFinite` and `isInfinite` to `isOddNum`, `isEvenNum`, `isFiniteNum` and `isInfiniteNum` accordingly.

- Refactor `isOddNum`, `isEvenNum`, `isFiniteNum` and `isInfiniteNum` to accept only numbers as arguments. If not, will throw TypeError.

- Refactor `isNumber` to return true if `NaN` is passed, as in Javascript NaN is considered to be a number. (`typeof NaN === 'number'` resolves to true)


# v1.1.0
- Add `is.api` to provide a more functional approach while working with `is` functions.
- Add more functions to **"is"** category.
