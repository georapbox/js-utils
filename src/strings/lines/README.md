### [Strings](../) > lines

```js
lines(string)
```

> Returns an array with the lines of a a string.

- <code>string {String}</code>

The string to process.

#### Example
```js
var str = 'You can\'t make\nan omelet without\r\nbreaking a few eggs.';
var str2 = `You can\'t make
an omelet without
breaking a few eggs.`;

lines(str); // => Array [ "You can't make", "an omelet without", "breaking a few eggs." ]
lines(str2); // => Array [ "You can't make", "an omelet without", "breaking a few eggs." ]
```
