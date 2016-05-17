<a name="randomString"></a>

## randomString(n, [chars]) ⇒ <code>string</code>
Generates a random string of n characters, using the "chars" specified.

**Kind**: global function  
**Returns**: <code>string</code> - Returns the random string.  
**Category**: String  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| n | <code>number</code> |  | The length of the final random  string. |
| [chars] | <code>string</code> | <code>&quot;&#x27;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&#x27;&quot;</code> | The characters to use in order to generate the string. |

**Example**  
```js
randomString(10);
// -> 'RvXYUH6Swm'

randomString(10, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// -> 'SFUNKJHYDH'

randomString(10, '0123456789');
// -> '2394127333'

randomString();
// -> ''
```
