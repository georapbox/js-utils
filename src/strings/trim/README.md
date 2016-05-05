### [Strings](../) > trim

```js
trim(subjectString)
```

Removes whitespace from both ends of a string.
Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

#### Arguments

- `subjectString` _(string)_: The string to be trimmed.

#### Returns

_(string)_: Returns the result string.

#### Example
```js
var str = '    Lorem ipsum dolor si amet.    ';

var trimmed = trim(str);
// -> Lorem ipsum dolor si amet.
```
