<a name="isEmpty"></a>

## isEmpty(value) ⇒ <code>Boolean</code>
Checks if 'value' is empty.
Arrays, strings, or arguments objects with a length of 0 and plain objects containing no
own enumerable properties or inherited from prototypes properties are considered "empty".

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if empty, else false.  
**Category**: Is  
**Note:**: Use with caution as DOM elements, primitive strings/numbers, host objects may not give consistent results across browsers.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The object to check if is empty. |

**Example**  
```js
isEmpty(['a', 'b', 'c', 'd']);
// -> false

isEmpty('Lorem ipsum dolor sit amet');
// -> false

isEmpty({ a: 'a', b: 'b' });
// -> false

isEmpty([]);
// -> true

isEmpty('');
// -> true

isEmpty(' ');
// -> false

isEmpty({});
// -> true

isEmpty(Object.create(null));
// -> true

isEmpty(Object.create({}));
// -> true

isEmpty(Object.create({foo: 'bar'}));
// -> false (inherits from proptotype)

var obj = {};
Object.defineProperty(obj, 'hidden', {
  value: null,
  enumerable: false
});
isEmpty(obj);
// -> true ('hidden' is non-enumerable)
```
