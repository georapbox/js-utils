### [Strings](../) > subStrAfterChars

```js
subStrAfterChars(str, chars [, last])
```

> Returns a substring after a specific sequence of character(s).

> By default looks for the first occuerence of this sequence.
> If the character or sequence of characters not found, returns the initial string.

- <code>str {string}</code>

The initial string to process.

- <code>chars {string}</code>

One or more characters to use for the lookup.

- <code>[last] {boolean}</code>

If <code>true</code> or any truthy value, will lookup for the last occurence of the character or sequence of characters specified.
Default value is <code>undefined</code>.

#### Example
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
