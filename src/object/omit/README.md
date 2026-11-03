<a name="omit"></a>

## omit(obj, [props]) ⇒ <code>object</code>
Creates a new object excluding the specified own enumerable properties
of the source object.

Only top-level properties are omitted. Inherited and non-enumerable
properties are not copied. String and symbol property keys are supported.
The original object is not modified.

**Kind**: global function  
**Returns**: <code>object</code> - A new object containing the remaining properties.  
**Throws**:

- <code>TypeError</code> If the first argument is not an object or the second argument is not an array.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>object</code> |  | The source object. |
| [props] | <code>Array.&lt;(string\|symbol)&gt;</code> | <code>[]</code> | The property keys to omit. |

**Example**  
```js
omit({ a: 1, b: 2, c: 3 }, ['a', 'c']);
// => { b: 2 }

omit({ a: 1, b: 2 }, ['a', 'b']);
// => {}

omit({ a: 1, b: 2 }, ['missing']);
// => { a: 1, b: 2 }

omit({ a: 1, b: 2 });
// => { a: 1, b: 2 }

const key = Symbol('id');
omit({ [key]: 123, name: 'John' }, [key]);
// => { name: 'John' }
```
