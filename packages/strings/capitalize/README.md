<a name="capitalize"></a>

## capitalize(subjectString, [lowerCaseRest]) ⇒ <code>String</code>
Capitalizes the first character of a string.

**Returns**: <code>String</code> - A new capitalized string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subjectString | <code>String</code> |  | The string to capitalize its first character. |
| [lowerCaseRest] | <code>Boolean</code> | <code>false</code> | If true will lowercase the rest of the string. |

**Example**  
```js
capitalize('hello');
// => 'Hello'

capitalize('hElLo');
// -< 'HElLo'

capitalize('hElLo', true);
// => 'Hello'
```
