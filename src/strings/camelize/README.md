### [Strings](../) > camelize

```js
camelize(str [, camelizeSpaces])
```

Converts a string into camel casing, removing "underscores", "dashes" or spaces (spaces is optional).

#### Arguments

- `string` _(string)_: The string to camelize.

- `[camelizeSpaces]` _(boolean)_: Optional. Default is undefined (falsy). Indicates if spaces are camelized or not.

#### Returns

_(string)_: Returns the camelized string.

#### Examples
```js
camelize('hello_world');
// -> 'helloWorld'

camelize('-moz-animation');
// -> 'MozAnimation'

camelize('lorem ipsum', true);
// -> 'loremIpsum'

camelize('lorem ipsum');
// ->'lorem ipsum'
```
