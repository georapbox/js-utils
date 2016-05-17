<a name="snakeCase"></a>

## snakeCase(subjectString) ⇒ <code>String</code>
Converts string into string delimited by underscores.

**Kind**: global function  
**Returns**: <code>String</code> - The result string.  
**Category**: String  

| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to convert. |

**Example**  
```js
snakeCase('Foo Bar');
// -> 'foo_bar'

snakeCase('fooBar');
// -> 'foo_bar'

snakeCase('--FOO-BAR--');
// -> 'foo_bar'

snakeCase('__FOO_BAR__');
// -> 'foo_bar'

snakeCase('foo_bar');
// -> 'foo_bar'

snakeCase('foo bar');
// -> 'foo_bar'

snakeCase('foo???bar');
// -> 'foo_bar'

snakeCase('foo!@#$%^&*()bar');
// -> 'foo_bar'

snakeCase('-f-o-o-b-a-r-');
// -> f-o-o-b-a-r

snakeCase(' f o o b a r ');
// -> f-o-o-b-a-r
```
