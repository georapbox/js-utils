### [Strings](../) > subStr

```js
subStr(str, n)
```

Returns a substring denoted by n (positive or negative) characters.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `n` _(number)_: The number of characters (positive or negative) the new string has. If n >= 0, returns a substring from the left end of the string. If n < 0, returns a substring from the right end of the string. If n is not of type number, returns the whole string intact.

#### Returns

_(string)_: Returns the result string.

#### Examples
```js
var str = 'Lorem ispum dolor sit amet.';

subStr(str, 5));
// -> 'Lorem'

subStr(str, -3));
// -> 'et.'

subStr(str, 0));
// -> ''

subStr(str, parseInt('-4', 10)));
// -> 'met.'

subStr(str, 'hello'));
// -> 'Lorem ispum dolor sit amet.'
```
