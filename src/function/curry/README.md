<a name="curry"></a>

## curry(func, [arity]) ⇒ <code>function</code>
Transforms a function of N arguments in such a way that it can
be called as a chain of N functions each with a single argument (arity: 1).

**Kind**: global function  
**Returns**: <code>function</code> - A new, curried function.  
**Category**: Function  
**Throws**:

- <code>TypeError</code> If `func` is not function.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  | The function to curry. |
| [arity] | <code>Number</code> | <code>func.lenght</code> | The arity of `func`. Useful in cases that arity cannot be determined by `func.length`. As of ES2015 when a function has a rest parameter or at least one parameter with default value, the `func.length` is not properly calculated. |

**Example**  
```js
// Example 1
var animalPairs = function (a1, a2) {
  return a1 + ' and ' + a2;
};

var curriedAnimalPairs = curry(animalPairs);

var koalas = curriedAnimalPairs('Koalas');

koalas('Pandas');
// -> "Koalas and Pandas"

koalas('Elephants');
// ->  "Koalas and Elephants"

// Example 2
var sequence = function (start, end) {
  var res = [];

  for (var i = start; i <= end; i++) {
    res.push(i);
  }

  return res;
};

var seq5 = curry(sequence, 1);

seq5(5);
// -> [1, 2, 3, 4, 5]

// Example 3
var sum = function (a, b, c) {
  return a + b + c;
};

var mySum = curry(sum, 3),
  a = mySum(10),
  b = a(20);

b(5);
// -> 35
```
