###[Strings](../) > subStr

```js
subStr(str, n)
```

>Returns a substring denoted by n (positive or negative) characters.

- <code>str {string}</code>

The string to process.

- <code>n {number}</code>

The number of characters (positive or negative) the new string has.

If n >= 0, returns a substring from the left end of the string.<br/>
If n < 0, returns a substring from the right end of the string.<br/>
If n is not of type number, returns the whole string intact.

####Example
```js
var str = 'Lorem ispum dolor sit amet.';

subStr(str, 5)); // => 'Lorem'
subStr(str, -3)); // => 'et.'
subStr(str, 0)); // => ''
subStr(str, parseInt('-4', 10))); // => 'met.'
subStr(str, 'hello')); // => 'Lorem ispum dolor sit amet.'
```