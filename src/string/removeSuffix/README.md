<a name="removeSuffix"></a>

## removeSuffix(str, suffix) ⇒ <code>string</code>
Removes a suffix from the end of a string if present.

Returns the original string if it does not end with the specified suffix.
Only the last occurrence at the end is removed.

**Kind**: global function  
**Returns**: <code>string</code> - The string without the specified suffix, if present.  
**Throws**:

- <code>TypeError</code> If either argument is not a string.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to process. |
| suffix | <code>string</code> | The suffix to remove. |

**Example**  
```js
removeSuffix('foobar__', '__');
// => 'foobar'

removeSuffix('foobar__', '??');
// => 'foobar__'

removeSuffix('foofoo', 'foo');
// => 'foo'

removeSuffix('foobar', '');
// => 'foobar'
```
