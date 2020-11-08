<a name="camelCase"></a>

## camelCase(subjectString) ⇒ <code>String</code>
Converts a string to camel case, removing any non alphanumeric characters.

**Returns**: <code>String</code> - The camel cased result string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to convert. |

**Example**  
```js
camelCase('Foo Bar');
// -> 'fooBar'

camelCase('FOO BAR');
// -> 'fooBar'

camelCase('--foo-bar--');
// -> 'fooBar'

camelCase('__foo-bar__');
// -> 'fooBar'

camelCase('FOO?BAR'));
// -> 'fooBar'

camelCase('FOO!#$%^&?BAR'));
// -> 'fooBar'
```
