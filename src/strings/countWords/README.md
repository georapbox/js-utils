###[Strings](../) > countWords

```js
countWords(str)
```

> Returns the number of words in a string.

- <code>str {String}</code>

The string to process.

####Example
```js
countWords('Hello world!        \nThis is a message     from outter\tspace.'); // => 9
countWords(''); // => 0
countWords(); // => Throws type error.
countWords(100); // => Throws type error.
```