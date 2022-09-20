<a name="pick"></a>

## pick(object, paths, [pickOwnKeys]) ⇒ <code>Object</code>
Creates an object composed of the picked object properties.

**Returns**: <code>Object</code> - Returns the new object.  
**Throws**:

- <code>TypeError</code> Throws if `object` is not plain object.
- <code>TypeError</code> Throws if `paths` is not array.
- <code>TypeError</code> Throws if `pickOwnKeys` is not boolean but not undefined.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>Object</code> |  | The source object. |
| paths | <code>Array</code> |  | The property paths to pick. |
| [pickOwnKeys] | <code>Boolean</code> | <code>true</code> | If `true` will look up only for own keys; otherwise will look up in prototype chain. |

**Example**
```js
const object = Object.create({
  foo: 'bar'
});

Object.defineProperties(object, {
  a: { value: 1 },
  b: { value: 2 },
  c: { value: 3 }
});

pick(object, ['a', 'c', 'foo']);
// => { a: 1, c: 3 }

pick(object, ['a', 'c', 'foo'], false);
// => { a: 1, c: 3, foo: 'bar' }

pick(object, ['d']);
// => {}
```
