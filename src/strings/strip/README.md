### [Strings](../) > strip

```js
strip(subjectString, [string1], [string2], ...)
```

Creates a new string with all occurrences of [string1], [string2], ... removed.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `[string1], [string2], ...` _(string)_: The substrings to remove from the original string.

#### Returns

_(string)_: Returns the result string.

#### Examples
```js
var str = 'Lorem_ipsum_dolor_sit_amet. Lorem+ipsum+dolor+sit+amet. 123456789';

strip(str, '_');
// -> 'Loremipsumdolorsitamet. Lorem+ipsum+dolor+sit+amet. 123456789'

strip(str, '+');
// -> 'Lorem_ipsum_dolor_sit_amet. Loremipsumdolorsitamet. 123456789'

strip(str, '123');
// -> 'Lorem_ipsum_dolor_sit_amet. Lorem+ipsum+dolor+sit+amet. 456789'

strip(str, 'Lorem');
// -> '_ipsum_dolor_sit_amet. +ipsum+dolor+sit+amet. 123456789'
```
