<a name="pickBy"></a>

## pickBy(object, predicate, [pickOwnKeys]) ⇒ <code>Object</code>
Creates an object composed of the object enumerable properties that predicate returns truthy for.
The predicate is invoked with two arguments: (value, key).

**Returns**: <code>Object</code> - Returns the new object.  
**Throws**:

- <code>TypeError</code> Throws if `object` is not plain object.
- <code>TypeError</code> Throws if `predicate` is not function.
- <code>TypeError</code> Throws if `pickOwnKeys` is not boolean but not undefined.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>Object</code> |  | The source object. |
| predicate | <code>function</code> |  | The function invoked per property. |
| [pickOwnKeys] | <code>Boolean</code> | <code>true</code> | If `true` will look up only for own enumerable keys; otherwise will look up in prototype chain. |

**Example**  
```js
const object = Object.create({
  e: 5
});

Object.defineProperties(object, {
  a: {
    value: 1,
    enumerable: true
  },
  b: {
    value: '2',
    enumerable: true
  },
  c: {
    value: 3,
    enumerable: true
  },
  d: {
    value: 4,
    enumerable: false
  }
});

pickBy(object, function (value) {
  return typeof value === 'number';
});
// => { a: 1, c: 3 }

pickBy(object, function (value) {
  return typeof value === 'number';
}, false);
// => { a: 1, c: 3, e: 5 }

pickBy(object, function (value) {
  return typeof value === 'function';
});
// => {}

pickBy(object, function (_, key) {
  return key === 'a';
});
// => { a: 1 }

pickBy(object, function (_, key) {
  return key === 'd'; // property "d" is not enumerable
});
// => {}
```
