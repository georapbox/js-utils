<a name="randomString"></a>

## randomString(length, [chars]) ⇒ <code>string</code>
Generates a random string of specific `length` allowing a set of characters specified by `chars`.

**Returns**: <code>string</code> - Returns the random generated string.  
**Category**: String  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| length | <code>number</code> | | The number of characters of the generated string. |
| [chars] | <code>string</code> | '#aA!' | Type of characters to be allowed in the generated string. Allow numeric (`#`) characters, lower-case (`a`) characters, upper-case (`A`) characters, special (`!`) characters. |

**Example**  
```js
randomString(8, '#aA!');
// -> '@+[cd{tX'

randomString(8, '#aA');
// -> 'jeEmsT8z'

randomString(8, '#a');
// -> 'toae8z3z'

randomString(8, '#');
// -> '63263257'

randomString(16);
// -> 'g*EY;#5PlO2V!!'

randomString(16, 'aA');
// -> 'YGOSgnoUIHaUvEcp'
```
