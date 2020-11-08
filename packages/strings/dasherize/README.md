<a name="dasherize"></a>

## dasherize(subjectString) ⇒ <code>String</code>
Converts a camel cased or snake cased string into a string delimited by dashes.

**Returns**: <code>String</code> - The converted string.  
**Throws**:

- <code>TypeError</code> If `subjectString` is not string.


| Param | Type | Description |
| --- | --- | --- |
| subjectString | <code>String</code> | The string to dasherize. |

**Example**  
```js
dasherize('backgroundColor');
// -> 'background-color'

dasherize('MozBackgroundImage');
// -> '-moz-background-image'

dasherize(['MozBackgroundImage']);
// -> Throws TypeError

dasherize('-moz-background-image');
// -> '-moz-background-image'
```
