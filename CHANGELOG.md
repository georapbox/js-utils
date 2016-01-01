# CHANGELOG


### v1.2.0
- Rename ```isOdd```, ```isEven```, ```isFinite``` and ```isInfinite``` to ```isOddNum```, ```isEvenNum```,
```isFiniteNum``` and ```isInfiniteNum``` accordingly.

- Refactor ```isOddNum```, ```isEvenNum```, ```isFiniteNum``` and ```isInfiniteNum``` to accept only numbers as arguments.
If not, will throw TypeError.

- Refactor ```isNumber``` to return true if ```NaN``` is passed, as in Javascript NaN is considered to be a number. (```typeof NaN === 'number'``` resolves to true)


### v1.1.0
- Add ```is.api``` to provide a more functional approach while working with ```is``` functions.
- Add more functions to **"is"** category.
