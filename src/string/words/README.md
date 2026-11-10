<a name="words"></a>

## words(str, [locale]) ⇒ <code>Array</code>
Extracts words from a string using locale-aware word segmentation.

Uses the runtime's default locale if none is provided.
Excludes whitespace, punctuation, and other non-word segments.

Segmenters are cached by locale using a least recently used (LRU)
cache with a maximum of 10 entries.

**Kind**: global function  
**Returns**: <code>Array</code> - An array containing the words.  
**Throws**:

- <code>TypeError</code> If `str` is not a string or `locale` is not a string or undefined.
- <code>RangeError</code> If `locale` is not a valid locale identifier.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to process. |
| [locale] | <code>string</code> | The locale used for word segmentation. Defaults to the runtime's locale. |

**Example**  
```js
words('Hello, world!');
// => ['Hello', 'world']

words("Don't stop!", 'en');
// => ["Don't", 'stop']

words('Καλημέρα κόσμε', 'el');
// => ['Καλημέρα', 'κόσμε']

words('こんにちは世界', 'ja');
// => ['こんにちは', '世界']

words('Hello-world', 'en');
// => ['Hello', 'world']

words('helloWorld', 'en');
// => ['helloWorld']

words('');
// => []

words('Hello', null);
// Throws TypeError

words('Hello', 'invalid_locale');
// Throws RangeError
```
