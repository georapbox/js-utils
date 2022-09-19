<a name="isObjectLike"></a>

## isObjectLike(value) ⇒ <code>Boolean</code>
Checks if a value is object-like. A value is object-like if it's not `null` and has a `typeof` result of "object".

**Returns**: <code>Boolean</code> - Returns `true` if value is object-like, else `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**
```js
isObjectLike({});
// => true

isObjectLike(Object.create({}));
// => true

isObjectLike(Object.create(null));
// => true

isObjectLike([1, 2, 3]);
// => true

isObjectLike(new Number(0));
// => true

isObjectLike(new String('Hello world'));
// => true

isObjectLike(new RegExp('s+')));
// => true

isObjectLike(/s+/);
// => true

isObjectLike(new Map());
// => true

isObjectLike(new Set());
// => true

isObjectLike(0);
// => false

isObjectLike('Hello world');
// => false

isObjectLike(function noop() {});
// => false

isObjectLike(null);
// => false

isObjectLike(Boolean(1));
// => false

isObjectLike(Symbol('foo'));
// => false
```
