<a name="negate"></a>

## negate(func) ⇒ <code>function</code>
Creates a function that negates the result of the predicate `func`.
The `func` predicate is invoked with the this binding and arguments of the created function.

**Kind**: global function  
**Returns**: <code>function</code> - Returns the new function.  
**Category**: Function  
**Throws**:

- <code>TypeError</code> If `func` is not function.

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The predicate to negate. |

**Example**  
```js
// Example 1
var isString = function (val) {
  return typeof val === 'string';
};

var isNotString = negate(isString);

isString('lorem ipsum');
// -> true

isNotString('lorem ipsum');
// -> false

// Example 2
var isEven = function (n) {
  return n % 2 === 0;
};

var numbers = [1, 2, 3, 4, 5, 6];

var evens = numbers.filter(isEven);
// -> [2, 4, 6]

var odds = numbers.filter(negate(isEven));
// -> [1, 3, 5]
```
