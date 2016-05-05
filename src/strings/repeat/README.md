### [Strings](../) > repeat

```js
repeat(subjectString, count)
```

Repeat a string `count` times.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `[count=0]` _(number)_: Optional. Defaults to 0. Times to repeat the string.

#### Returns

_(string)_: Returns the result string.

#### Examples
```js
repeat('&nbsp;', 4);
// -> '&nbsp;&nbsp;&nbsp;&nbsp;'

repeat('&nbsp;', 2.5);
// -> '&nbsp;&nbsp;'

repeat('&nbsp;', 0);
// -> ''

repeat('&nbsp;', null);
// -> ''

repeat('&nbsp;');
// -> ''

repeat('&nbsp;', -2);
// -> ''

repeat('&nbsp;', Infinity);
// -> ''

repeat('&nbsp;', -Infinity);
// -> ''

repeat('&nbsp;', NaN);
// -> ''
```
