### [Strings](../) > camelCase

```js
camelCase(subjectString)
```

Converts a string to camel case, removing any non alphanumeric characters.

#### Arguments

- `subjectString` _(string)_: The string to convert.

#### Returns

_(string)_: Returns the result string.

#### Examples
```js
camelCase('Foo Bar');
// -> 'fooBar'

camelCase('FOO BAR');
// -> 'fooBar'

camelCase('--foo-bar--');
// -> 'fooBar'

camelCase('__foo-bar__');
// -> 'fooBar'

camelCase('FOO?BAR'));
// -> 'fooBar'

camelCase('FOO!#$%^&?BAR'));
// -> 'fooBar'
```
