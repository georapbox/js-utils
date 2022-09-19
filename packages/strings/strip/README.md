<a name="strip"></a>

## strip(subjectString) ⇒ <code>String</code>
Creates a new string with all occurrences of [string1], [string2],... removed.

**Returns**: <code>String</code> - The result string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to process. |
| [...args] | <code>...String</code> | The substrings to remove from the original string. |

**Example**  
```js
const str = 'Lorem_ipsum_dolor_sit_amet. Lorem+ipsum+dolor+sit+amet. 123456789';

strip(str, '_');
// => 'Loremipsumdolorsitamet. Lorem+ipsum+dolor+sit+amet. 123456789'

strip(str, '+');
// => 'Lorem_ipsum_dolor_sit_amet. Loremipsumdolorsitamet. 123456789'

strip(str, '123');
// => 'Lorem_ipsum_dolor_sit_amet. Lorem+ipsum+dolor+sit+amet. 456789'

strip(str, 'Lorem');
// => '_ipsum_dolor_sit_amet. +ipsum+dolor+sit+amet. 123456789'
```
