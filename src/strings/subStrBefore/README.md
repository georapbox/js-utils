### [Strings](../) > subStrBefore

```js
subStrBefore(subjectString, characters [, last])
```

Returns a substring before a specific sequence of character(s).

By default looks for the first occurrence of this sequence.
If the character or sequence of characters not found, returns the initial string.

#### Arguments

- `subjectString` _(string)_: The string to process.

- `characters` _(string)_: One or more characters to use for the lookup.

- `[last]` _(boolean)_: If `true` or any truthy value, will lookup for the last occurrence of the character or sequence of characters specified. Defaults to `undefined` (falsy).

**NOTE:** `subStrBefore` makes use of `String.prototype.lastIndexOf`.
For legacy browsers (<=IE8) that do not support it, use an [HTML5 shim](https://github.com/es-shims/es5-shim).

#### Examples
```js
subStrBefore('LOREM_IPSUM DOLOR_SIT AMET', '_');
// -> 'LOREM'

subStrBefore('LOREM_IPSUM DOLOR_SIT AMET', '_', true);
// -> 'LOREM_IPSUM DOLOR'

subStrBefore('LOREM_IPSUM DOLOR_SIT AMET', 'SIT');
// -> 'LOREM_IPSUM DOLOR_'

subStrBefore('LOREM_IPSUM DOLOR_SIT AMET', '?', true);
// -> 'LOREM_IPSUM DOLOR_SIT AMET'

subStrBefore('LOREM_IPSUM DOLOR_SIT AMET');
// -> Throws TypeError
```
