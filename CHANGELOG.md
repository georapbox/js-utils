# v1.3.2
- Add <code>isEventsupported</code> function to **DOM** category.

# v1.3.1
- Add <code>CanvasContext</code> class to **HTML5 Canvas** category.
- Add <code>convertImageToBase64</code> function to **HTML5 Canvas** category.


# v1.3.0
- Add <code>stripPunctuation</code> function to **Strings** category.
- Add <code>lines</code> function to **Strings** category.


# v1.2.0
- Rename <code>isOdd</code>, <code>isEven</code>, <code>isFinite</code> and <code>isInfinite</code> to <code>isOddNum</code>, <code>isEvenNum</code>, <code>isFiniteNum</code> and <code>isInfiniteNum</code> accordingly.

- Refactor <code>isOddNum</code>, <code>isEvenNum</code>, <code>isFiniteNum</code> and <code>isInfiniteNum</code> to accept only numbers as arguments. If not, will throw TypeError.

- Refactor <code>isNumber</code> to return true if <code>NaN</code> is passed, as in Javascript NaN is considered to be a number. (<code>typeof NaN === 'number'</code> resolves to true)


# v1.1.0
- Add <code>is.api</code> to provide a more functional approach while working with <code>is</code> functions.
- Add more functions to **"is"** category.
