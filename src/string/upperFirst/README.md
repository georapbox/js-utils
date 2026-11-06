<a name="upperFirst"></a>

## upperFirst(str) ⇒ <code>string</code>
Uppercases the first character of a string without changing the rest.

Uses Unicode default casing rules, without locale-specific capitalization.

**Kind**: global function  
**Returns**: <code>string</code> - The resulting string.  
**Throws**:

- <code>TypeError</code> If `str` is not a string.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to process. |

**Example**  
```js
upperFirst('hello');
// => 'Hello'

upperFirst('hElLo');
// => 'HElLo'

upperFirst('hElLo'.toLowerCase());
// => 'Hello'

upperFirst('καλημέρα');
// => 'Καλημέρα'

upperFirst('');
// => ''
```
