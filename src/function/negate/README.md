### [Function](../) > negate

```js
negate(func)
```

Creates a function that negates the result of the predicate `func`.
The `func` predicate is invoked with the `this` binding and arguments of the created function.

#### Arguments

- `func` _(function)_: The predicate to negate.

#### Returns

_(function)_: Returns a new negated function.

#### Examples
```js
var isString = function (val) {
    return typeof val === 'string';
};

var isNotString = negate(isString);

isString('lorem ipsum');
// -> true

isNotString('lorem ipsum');
// -> false
```

```js
var isEven = function (n) {
    return n % 2 === 0;
};

var numbers = [1, 2, 3, 4, 5, 6];

var evens = numbers.filter(isEven);
// -> [2, 4, 6]

var odds = numbers.filter(negate(isEven));
// -> [1, 3, 5]
```
