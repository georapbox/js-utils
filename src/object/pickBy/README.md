<a name="pickBy"></a>

## pickBy(object, predicate) ⇒ <code>object</code>
Creates a new object containing the own enumerable properties
of the source object for which the predicate returns a truthy value.

Inherited and non-enumerable properties are ignored.
String and symbol property keys are supported.
The original object is not modified.

**Kind**: global function  
**Returns**: <code>object</code> - A new object containing the matching properties.  
**Throws**:

- <code>TypeError</code> If the first argument is not an object or the second argument is not a function.


| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The source object. |
| predicate | <code>function</code> | The function invoked with `(value, key)` for each property. |

**Example**  
```js
pickBy({ a: 1, b: '2', c: 3 }, (value) => typeof value === 'number');
// => { a: 1, c: 3 }

pickBy({ a: 1, b: 2, c: 3 }, (_, key) => key !== 'b');
// => { a: 1, c: 3 }

pickBy({ a: 0, b: false, c: 3 }, (value) => Boolean(value));
// => { c: 3 }

pickBy({ a: 1, b: 2 }, (value) => value > 10);
// => {}
```
