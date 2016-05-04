### [Function](../) > before

```js
before(n, func)
```

Creates a function that invokes `func` while it’s called less than n times.
`func` is invoked with the this binding and arguments of the created function.

- `n` _(number)_: The number of calls before `func` is no longer invoked. A positive integer is expected. If a negative number or 0, `func` is never invoked. If `NaN`, `-Infinity` or `Infinity`, `func` is never invoked.

- `func` _(function)_: The function to restrict.

#### Returns

_(function)_: Returns the new restricted function.

#### Example
```js
var doSomething = before(6, function () {
    console.log('Do something...');
});

button.addEventListener('click', doSomething);
// -> logs "Do something..." up to 5 times.
```
