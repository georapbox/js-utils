<a name="removePrefix"></a>

## removePrefix(subjectString, [prefix]) ⇒ <code>String</code>
Removes prefix from start of a string.

**Returns**: <code>String</code> - The result string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.
- <code>TypeError</code> If `prefix` is not string but not if is `undefined`.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to process. |
| [prefix] | <code>String</code> | The prefix substring to remove from the original string. |

**Example**  
```js
removePrefix('__foo', '__');
// => 'foo'

removePrefix('__foobar', '??');
// => 'foobar'

removePrefix('__foobar');
// => 'foobar'

removePrefix('__foobar', {});
// => TypeError
```
