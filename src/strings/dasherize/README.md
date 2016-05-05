### [Strings](../) > dasherize

```js
dasherize(subjectString)
```

Converts a camel cased string into a string delimited by dashes.

#### Arguments

- `subjectString` _(string)_: The string to dasherize.

#### Returns

_(string)_: Returns the result string.

#### Examples
```js
dasherize('backgroundColor');
// -> 'background-color'

dasherize('MozBackgroundImage');
// -> '-moz-background-image'

dasherize(['MozBackgroundImage']);
// -> Throws TypeError

dasherize('-moz-background-image');
// -> '-moz-background-image'
```
