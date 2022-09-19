<a name="omit"></a>

## omit(obj, props) ⇒ <code>Object</code>

Creates an object composed of the own enumerable (not inherited) property paths of object that are not omitted.

**Returns**: <code>Object</code> - Returns the new object.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The source object. |
| props | <code>Array</code> | The property paths to omit. |

**Example**
```js
const obj = {
  a: 'aaa',
  b: 'bbb',
  c: 'ccc'
};

omit(obj, ['a', 'c']);
// => { b: 'bbb' }

omit(obj, ['a', 'b', 'c']);
// => {}

omit(obj);
// => { a: 'aaa', b: 'bbb', c: 'ccc' }

omit(obj, []);
// => { a: 'aaa', b: 'bbb', c: 'ccc' }

omit(obj, ['key_not_exists']);
// => { a: 'aaa', b: 'bbb', c: 'ccc' }
```
