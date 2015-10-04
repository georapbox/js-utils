### [Strings](../) > camelize

```js
camelize(str [, camelizeSpaces])
```

> Converts a string into camel casing, removing "underscores", "dashes" or spaces (spaces is optional).

- <code>string {string}</code>

The string to camelize.

- <code>[camelizeSpaces] {boolean}</code>

Boolean that indicates if spaces are camelized or not. Default is undefined (falsey).

#### Example
```js
camelize('hello_world'); // 'helloWorld'
camelize('-moz-animation'); // 'MozAnimation'
camelize('lorem ipsum', true); // 'loremIpsum'
camelize('lorem ipsum'); // 'lorem ipsum'
```
