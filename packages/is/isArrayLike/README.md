<a name="isArrayLike"></a>

## isArrayLike(value) ⇒ <code>Boolean</code>
Checks if a value is array-like.

A value is considered array-like if it’s not a function and has a `value.length` that’s an
integer greater than or equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.

**Returns**: <code>Boolean</code> - True if value is array-like, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
function noop() {}

function dummy(...args) {
  return args;
}

const args = dummy();

isArrayLike([1, 2, 3]));
// => true

isArrayLike('abc'));
// => true

isArrayLike(0));
// => false

isArrayLike({foo: 'bar'}));
// => false

isArrayLike(noop));
// => false

isArrayLike(null));
// => false

isArrayLike());
// => false

isArrayLike(document.body.children);
// => true

isArrayLike(args));
// => true
```
