### [Misc](../) > curry

```js
curry(fn)
```

> Currying refers to the process of transforming a function with multiple arity into
> the same function with less arity. The curried effect is achieved by binding some of
> the arguments to the first function invoke, so that those values are fixed for the next invocation.<br/>
> https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe

- <code>fn {function}</code>

A callback function to create higher-order "factory" functions.

#### Example
```js
// Example 1
(function () {
    var babyAnimals = function (a1, a2) {
        return 'I love ' + a1 + ' and ' + a2 + '.';
    };

    var babyKoalas = curry(babyAnimals, 'koalas');
    babyKoalas('elephants'); // => "I love koalas and elephants."
    babyKoalas('lions'); // =>  "I love koalas and lions."
}());

// Example 2
(function () {
    var sequence = function (start, end) {
        'use strict';
        var res = [];

        for (var i = start; i <= end; i++) {
            res.push(i);
        }

        return res;
    };

    var seq5 = curry(sequence, 1);
    seq5(5); // => [1, 2, 3, 4, 5]
}());

// Example 3
(function () {
    var sum = function () {
        return Array.prototype.reduce.call(arguments, function (previousVal, currentVal) {
            return previousVal + currentVal
        });
    }

    var mySum = curry(sum, 10);
    mySum(5); // => 15
    mySum(5, 20, 10); // => 45
}());
```
