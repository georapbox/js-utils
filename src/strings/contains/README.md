##contains
>Returns true if the string contains the passed string.

####Syntax
```js
contains(str, subStr [, caseInsensitive])
```

- <code>str</code>

The initial string.

- <code>subStr</code>

The string we want to check if is included in the initial string.

- <code>caseInsensitive (Optional)</code>

If true, the lookup is case insensitive. Default is undefined (falsey).

####Example
```js
var str = 'Lorem ipsum | dolor si *amet.';

contains(str, 'lorem')); // false
contains(str, '*')); // true
contains(str, '|')); // true
contains(str, 'aaa')); // false
contains(str, 'lorem', true)); // true (case insensitive lookup)
```