### [Misc](../) > curry

```js
curry(fn)
```
> Returns a curried equivalent of the provided function.

- <code>fn {function}</code>

The function to curry.

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
    var sum = function (a, b, c) {
        'use strict';
        return a + b + c;
    };

    var mySum = curry(sum),
        a = mySum(10),
        b = a(20);

    b(5); // => 35
}());
```
