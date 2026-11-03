<a name="negate"></a>

## negate(fn) ⇒ <code>function</code>
Creates a function that negates the result of the predicate `fn`.
The `fn` predicate is invoked with the this binding and arguments of the created function.

**Returns**: <code>function</code> - Returns the new function.  
**Throws**:

- <code>TypeError</code> If `fn` is not function.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The predicate to negate. |

**Example**
```js
// Example 1
const isString = val => typeof val === 'string';

const isNotString = negate(isString);

isString('lorem ipsum');
// => true

isNotString('lorem ipsum');
// => false

// Example 2
const isEven = n => n % 2 === 0;

const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter(isEven);
// => [2, 4, 6]

const odds = numbers.filter(negate(isEven));
// => [1, 3, 5]
```
