### [Strings](../) > endsWith

```js
endsWith(subjectString, searchString [, position=str.length])
```

Determines whether a string ends with the characters of another string, returning true or false as appropriate.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `searchString` _(string)_: The characters to be searched for at the end of the original string.

- `[position=str.length]` _(number)_: Optional. Search within this string as if this string were only this long; defaults to the original string's actual length, clamped within the range established by this string's length.

#### Returns

_(boolean)_: Returns true if `subjectString` ends with `searchString`, else false.

#### Examples
```js
var str = 'To be, or not to be, that is the question.';

endsWith(str, 'question.');
// -> true

endsWith(str, 'to be');
// -> false

endsWith(str, 'to be', 19);
// -> true
```
