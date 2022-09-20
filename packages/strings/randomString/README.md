<a name="randomString"></a>

## randomString(len, [chars]) ⇒ <code>String</code>
Generates a pseudo-random string of specific `len` allowing a set of characters specified by `chars`.

**Returns**: <code>String</code> - The random generated string.  
**Throws**:

- <code>TypeError</code> Throws if first argument is not number.
- <code>TypeError</code> Throws if second argument is not a string that contains the allowedcharacters but not undefined.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| len | <code>Number</code> |  | The number of characters of the generated string. |
| [chars] | <code>String</code> | <code>&#x27;#aA!&#x27;</code> | Type of characters to be allowed in the generated string. Allow numeric (`#`) characters, lower-case (`a`) characters, upper-case (`A`) characters, special (`!`) characters. |

**Example**  
```js
randomString(8, '#aA!');
// => '@+[cd{tX'

randomString(8, '#aA');
// => 'jeEmsT8z'

randomString(8, '#a');
// => 'toae8z3z'

randomString(8, '#');
// => '63263257'

randomString(16);
// => 'g*EY;#5PlO2V!!'

randomString(16, 'aA');
// => 'YGOSgnoUIHaUvEcp'
```
