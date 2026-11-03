<a name="get"></a>

## get(object, path, [defaultValue]) ⇒ <code>any</code>
Retrieves the value at a specified path within an object.

The path can be a string using dot or bracket notation, or an array
of property keys. Array paths support keys containing dots or brackets.

If the resolved value is `undefined`, the default value is returned.
Null values are preserved, and inherited properties can be accessed.

**Kind**: global function  
**Returns**: <code>any</code> - The resolved value or the default value.  
**Throws**:

- <code>TypeError</code> If `path` is not a string or an array.


| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to query. |
| path | <code>string</code> \| <code>Array</code> | The property path to resolve. |
| [defaultValue] | <code>any</code> | The value returned when the resolved value is `undefined`. |

**Example**  
```js
const object = { a: [{ b: { c: 3 } }] };

get(object, 'a[0].b.c');
// => 3

get(object, ['a', 0, 'b', 'c']);
// => 3

get(object, 'a[1].b.c', 'DEFAULT');
// => 'DEFAULT'

get({ a: null }, 'a', 'DEFAULT');
// => null

get({ 'a.b': 10 }, ['a.b']);
// => 10
```
