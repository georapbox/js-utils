<a name="truncate"></a>

## truncate(str, count, [suffix]) ⇒ <code>string</code>
Truncates a string to the specified number of characters.

Uses Unicode grapheme clusters to avoid splitting characters such as
emojis, flags, and letters with combining marks.

Appends `suffix` only when truncation occurs. The suffix is not
included in the character count. Whitespace is preserved.

Fractional counts are rounded down. Negative, NaN, and infinite
counts return the original string.

Treats the input as plain text. HTML markup is not parsed or preserved
and may be truncated in the middle of a tag.

**Kind**: global function  
**Returns**: <code>string</code> - The truncated string, or the original if no truncation is needed.  
**Throws**:

- <code>TypeError</code> If `str` or `suffix` is not a string, or `count` is not a number.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  | The string to truncate. |
| count | <code>number</code> |  | The maximum number of characters to retain. |
| [suffix] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | The string to append when truncation occurs. |

**Example**  
```js
truncate('Hello world', 5);
// => 'Hello'

truncate('Hello world', 5, '...');
// => 'Hello...'

truncate('Hello', 5, '...');
// => 'Hello'

truncate('Hello world', 6, '...');
// => 'Hello ...'

truncate('👩‍💻 Hello', 1, '...');
// => '👩‍💻...'

truncate('🇬🇷 Greece', 1, '...');
// => '🇬🇷...'

truncate('Hello', 0, '...');
// => '...'

truncate('Hello', 3.7);
// => 'Hel'

truncate('Hello', -1);
// => 'Hello'

truncate('Hello', NaN);
// => 'Hello'

truncate('Hello', Infinity);
// => 'Hello'

truncate('Hello');
// Throws TypeError
```
