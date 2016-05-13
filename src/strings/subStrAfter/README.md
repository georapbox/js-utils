### [Strings](../) > subStrAfter

```js
subStrAfter(subjectString, characters [, last])
```

Returns a substring after a specific sequence of character(s).

By default looks for the first occurrence of this sequence.
If the character or sequence of characters not found, returns the initial string.

#### Arguments

- `subjectString` _(string)_: The initial string to process.

- `characters` _(string)_: One or more characters to use for the lookup.

- `[last]` _(boolean)_: If `true` or any truthy value, will lookup for the last occurrence of the character or sequence of characters specified. Defaults to `undefined`.

#### Returns

_(string)_: Returns the result string.

#### Examples
```js
subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', '_');
// -> 'IPSUM DOLOR_SIT AMET'

subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', '_', true);
// -> 'SIT AMET'

subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', 'SIT ');
// -> 'AMET'

subStrAfter('LOREM_IPSUM DOLOR_SIT AMET', '?', true);
// -> 'LOREM_IPSUM DOLOR_SIT AMET'
```
