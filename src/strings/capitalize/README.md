### [Strings](../) > capitalize

```js
capitalize(subjectString [, lowerCaseRest])
```

Capitalizes the first character of a string.

#### Arguments

- `subjectString` _(string)_: The string to capitalize its first character.

- `[lowerCaseRest]` _(boolean)_: OPtional. Default is undefined (falsy). Indicates if the rest of the string will be converted to lower case.

#### Returns

_(string)_: Returns the capitalized string.

#### Examples
```js
capitalize('hello');
// -> 'Hello'

capitalize('hElLo');
// -< 'HElLo'

capitalize('hElLo', true);
// -> 'Hello'
```
