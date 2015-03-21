###[Strings](/src/strings) > repeat
```js
repeat(string, count)
```

> Returns a string repeated <code>count</code> times.

- <code>{string} string</code> The string to process.
- <code>{number} count</code> Times to repeat the string.

####Example
```js
repeat('&nbsp;', 4); // => '&nbsp;&nbsp;&nbsp;&nbsp;'
repeat('&nbsp;', 2.5); // => '&nbsp;&nbsp;'
repeat('&nbsp;'); // => '' (same as repeat('&nbsp;', 0))
repeat('&nbsp;', -2); // => RangeError
repeat('&nbsp;', Infinity); // => RangeError
```