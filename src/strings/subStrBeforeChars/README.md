### [Strings](../) > subStrBeforeChars

```js
subStrBeforeChars(str, chars [, last])
```

> Returns a substring before a specific sequence of character(s).

> By default looks for the first occurrence of this sequence.
> If the character or sequence of characters not found, returns the initial string.

- <code>str {String}</code>

The initial string to process.

- <code>chars {String}</code>

One or more characters to use for the lookup.

- <code>[last] {Boolean}</code>

If <code>true</code> or any truthy value, will lookup for the last occurrence of the character or sequence of characters specified.
Default value is <code>undefined</code>.

**NOTE:** `subStrBeforeChars` makes use of `String.prototype.lastIndexOf`.
For legacy browsers (<=IE8) that do not support it, use an [HTML5 shim](https://github.com/es-shims/es5-shim).

#### Example
```js
subStrBeforeChars('LOREM_IPSUM DOLOR_SIT AMET', '_');
// => 'LOREM'

subStrBeforeChars('LOREM_IPSUM DOLOR_SIT AMET', '_', true);
// => 'LOREM_IPSUM DOLOR'

subStrBeforeChars('LOREM_IPSUM DOLOR_SIT AMET', 'SIT');
// => 'LOREM_IPSUM DOLOR_'

subStrBeforeChars('LOREM_IPSUM DOLOR_SIT AMET', '?', true);
// => 'LOREM_IPSUM DOLOR_SIT AMET'
```
