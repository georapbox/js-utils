<a name="get"></a>

## get(object, path, [defaultValue]) ⇒ <code>\*</code>

Gets the `value` at path of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.

**Returns**: <code>\*</code> - Returns the resolved value.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object to query. |
| path | <code>String\|Array</code> | The path of the property to get. |
| [defaultValue] | <code>\*</code> | The value returned for `undefined` resolved values. |

**Example**
```js
const object = {
  a: [
    {
      b: {
        c: 3
      }
    }
  ]
};

get(object, 'a.0.b.c');
// => 3

get(object, ['a', '0', 'b', 'c']);
// => 3

get(object, 'a[1].b.c');
// => undefined

get(object, 'a[1].b.c', 'DEFAULT');
// => 'DEFAULT'
```
