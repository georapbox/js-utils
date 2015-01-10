##subStr
>Returns a substring denoted by n (positive or negative) characters.

####Syntax
```js
subStr(str, n)
```

- ```js
str
```
The initial string.

- ```js
n
```
The number of characters (positive or negative) the new string has.

If n >= 0, returns a substring from the left end of the string.<br/>
If n < 0, returns a substring from the right end of the string.<br/>
If n is not of type number, throws exception.

####Example
```js
var str = 'Lorem ispum dolor sit amet.';

subStr(str, 5)); // 'Lorem'
subStr(str, -3)); // 'et.'
subStr(str, 0)); // ''
subStr(str, parseInt('-4', 10))); // 'met.'
subStr(str, 'hello')); // 'Uncaught Error: Wrong type of argument passed. Expected a number, instead found a string.'
```