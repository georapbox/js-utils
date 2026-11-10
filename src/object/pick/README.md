<a name="pick"></a>

## pick(object, paths) ⇒ <code>object</code>
Creates a new object containing the specified own enumerable properties
of the source object.

Only top-level properties are picked. Inherited and non-enumerable
properties are ignored. String and symbol property keys are supported.
The original object is not modified.

**Kind**: global function  
**Returns**: <code>object</code> - A new object containing the picked properties.  
**Throws**:

- <code>TypeError</code> If the first argument is not an object or the second argument is not an array.


| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The source object. |
| paths | <code>Array.&lt;(string\|symbol)&gt;</code> | The property keys to pick. |

**Example**  
```js
pick({ a: 1, b: 2, c: 3 }, ['a', 'c']);
// => { a: 1, c: 3 }

pick({ a: 1, b: 2 }, ['missing']);
// => {}

pick({ a: 1, b: 2 }, []);
// => {}

const key = Symbol('id');
pick({ [key]: 123, name: 'John' }, [key]);
// => { [key]: 123 }
```
