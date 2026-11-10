<a name="substringAfter"></a>

## substringAfter(str, delimiter, [last]) ⇒ <code>string</code>
Returns the substring after the first occurrence of a delimiter.

When `last` is truthy, uses the last occurrence instead.
Returns the original string if the delimiter is empty or not found.
Matching is case-sensitive.

**Kind**: global function  
**Returns**: <code>string</code> - The substring after the delimiter, or the original string if the delimiter is empty or not found.  
**Throws**:

- <code>TypeError</code> If `str` or `delimiter` is not a string.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  | The string to process. |
| delimiter | <code>string</code> |  | The substring to search for. |
| [last] | <code>boolean</code> | <code>false</code> | Whether to use the last occurrence. |

**Example**  
```js
substringAfter('foo/bar/baz', '/');
// => 'bar/baz'

substringAfter('foo/bar/baz', '/', true);
// => 'baz'

substringAfter('foo/bar/baz', '?');
// => 'foo/bar/baz'

substringAfter('foobar', '');
// => 'foobar'

substringAfter('hello-world', 'hello-');
// => 'world'

substringAfter('🍎🍐🍊🍌', '🍊');
// => '🍌'
```
