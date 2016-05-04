### [Function](../) > after

```js
after(n, func)
```

Creates a function that invokes `func` once it's called `n` or more times.
`func` is invoked with the this binding and arguments of the created function.

#### Arguments

- `n` _(number)_: The number of calls before `func` is invoked. A positive integer is expected. If a negative number or 0, `func` is invoked immediately. If `NaN`, `-Infinity` or `Infinity`, `func` is never invoked.

- `func` _(function)_: The function to restrict.

#### Returns

_(function)_: Returns the new restricted function.

#### Example
```js
var doSomething = after(4, function () {
    console.log('Do something...');
});

button.addEventListener('click', doSomething);
// -> logs "Do something..." after button is clicked at least 4 times.
```
