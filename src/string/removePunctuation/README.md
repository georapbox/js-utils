<a name="removePunctuation"></a>

## removePunctuation(str) ⇒ <code>string</code>
Removes Unicode punctuation characters from a string.

Removes punctuation such as periods, commas, quotes, apostrophes,
brackets, dashes, underscores, and punctuation from other languages.
Letters, numbers, symbols, emojis, and whitespace are preserved.

Punctuation is removed rather than replaced with spaces, so words
separated only by punctuation are joined together.

**Kind**: global function  
**Returns**: <code>string</code> - The string without punctuation.  
**Throws**:

- <code>TypeError</code> If `str` is not a string.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to process. |

**Example**  
```js
removePunctuation('Hello, world!');
// => 'Hello world'

removePunctuation("Don't stop!");
// => 'Dont stop'

removePunctuation('hello-world_123');
// => 'helloworld123'

removePunctuation('Hello—world！');
// => 'Helloworld'

removePunctuation('Price: $50 + tax!');
// => 'Price $50 + tax'

removePunctuation('Hello   world');
// => 'Hello   world'

removePunctuation('');
// => ''
```
