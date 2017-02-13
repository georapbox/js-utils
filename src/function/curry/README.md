<a name="curry"></a>

## curry(func, [n]) ⇒ <code>function</code>
Transforms a function of N arguments in such a way that it can
be called as a chain of N functions each with a single argument (arity: 1).

**Kind**: global function  
**Returns**: <code>function</code> - A new, curried function.  
**Category**: Function  
**Throws**:

- <code>TypeError</code> If `func` is not function.

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to curry. |
| [n] | <code>Number</code> | The number of expected arguments in case that the function's arity cannot be automatically determined. |

**Example**  
```js
// Example 1
var babyAnimals = function (a1, a2) {
  return 'I love ' + a1 + ' and ' + a2 + '.';
};

var babyKoalas = curry(babyAnimals, 'koalas');

babyKoalas('elephants');
// -> "I love koalas and elephants."

babyKoalas('lions');
// ->  "I love koalas and lions."

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
