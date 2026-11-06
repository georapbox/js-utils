<a name="classnames"></a>

## classnames(...args) ⇒ <code>string</code>
Creates a string by conditionally joining class names with spaces.

String arguments are included directly. Arrays are flattened recursively.
For plain objects, each own enumerable property whose value is truthy
contributes its key as a class name. All other values are ignored.

**Kind**: global function  
**Returns**: <code>string</code> - The concatenated class names.  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>any</code> | The class names, arrays, and objects to combine. |

**Example**  
```js
classnames('foo', 'bar');
// => 'foo bar'

classnames('foo', { bar: true, baz: false });
// => 'foo bar'

classnames('foo', ['bar', 'baz']);
// => 'foo bar baz'

classnames('foo', ['bar', ['baz', { active: true }]]);
// => 'foo bar baz active'

classnames('foo', null, false, 0, { active: true });
// => 'foo active'
```
