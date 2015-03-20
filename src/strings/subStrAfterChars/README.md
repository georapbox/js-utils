##subStrAfterChars
>Returns a substring after a specific sequence of character(s).

>By default looks for the first occuerence of this sequence.
>If the character or sequence of characters not found, returns the initial string.

####Syntax
```js
subStrAfterChars(str, chars [, last])
```

- <code>str</code>

The initial string to process.

- <code>chars</code>

One or more characters to use for the lookup.

- <code>[last]</code>

If <code>true</code> or any truthy value, will lookup for the lsat occurence of the character or sequence of characters specified.
Default value is <code>undefined</code>.

####Example
```js
subStrAfterChars('LOREM_IPSUM DOLOR_SIT AMET', '_');
// => 'IPSUM DOLOR_SIT AMET'

subStrAfterChars('LOREM_IPSUM DOLOR_SIT AMET', '_', true);
// => 'SIT AMET'

subStrAfterChars('LOREM_IPSUM DOLOR_SIT AMET', 'SIT ');
// => 'AMET'

subStrAfterChars('LOREM_IPSUM DOLOR_SIT AMET', '?', true);
// => 'LOREM_IPSUM DOLOR_SIT AMET'
```