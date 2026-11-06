<a name="removePrefix"></a>

## removePrefix(str, prefix) ⇒ <code>string</code>
Removes a prefix from the beginning of a string if present.

Returns the original string if it does not start with the specified prefix.
Only the first occurrence at the beginning is removed.

**Kind**: global function  
**Returns**: <code>string</code> - The string without the specified prefix, if present.  
**Throws**:

- <code>TypeError</code> If either argument is not a string.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to process. |
| prefix | <code>string</code> | The prefix to remove. |

**Example**  
```js
removePrefix('__foo', '__');
// => 'foo'

removePrefix('__foobar', '??');
// => '__foobar'

removePrefix('foofoo', 'foo');
// => 'foo'

removePrefix('foobar', '');
// => 'foobar'
```
