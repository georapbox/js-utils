### [Strings](../) > trimLeft

```js
trimLeft(subjectString)
```

> Removes whitespace from the left end of a string.
> Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

- `subjectString {String}`

The string to be trimmed

#### Example
```js
var str = '    Lorem ipsum dolor si amet.';
var trimmed = trimLeft(str); // Lorem ipsum dolor si amet.
```
