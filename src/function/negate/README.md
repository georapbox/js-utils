<a name="negate"></a>

## negate(fn) ⇒ <code>function</code>
Creates a function that negates the truthiness of the result returned by `fn`.

The returned function forwards all arguments to `fn` and preserves
the caller's `this` binding. The result is always a boolean.

**Kind**: global function  
**Returns**: <code>function</code> - The new function that returns the negated result.  
**Throws**:

- <code>TypeError</code> If `fn` is not a function.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The predicate to negate. |

**Example**  
```js
const isString = value => typeof value === 'string';
const isNotString = negate(isString);

isNotString('hello');
// => false

isNotString(42);
// => true

const isEven = number => number % 2 === 0;
const numbers = [1, 2, 3, 4, 5, 6];

numbers.filter(isEven);
// => [2, 4, 6]

numbers.filter(negate(isEven));
// => [1, 3, 5]
```
