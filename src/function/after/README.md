### [Function](../) > after

```js
after(n, func)
```
> Creates a function that invokes `func` once it's called `n` or more times.
> `func` is invoked with the this binding and arguments of the created function.

- `n {Number}`

The number of calls before `func` is invoked. A positive integer is expected.<br>
If a negative number or 0, `func` is invoked immediately.<br>
If `NaN`, `-Infinity` or `Infinity`, `func` is never invoked.

- `func {Function}`

The function to restrict.

#### Example
```js
var doSomething = after(4, function () {
    console.log('Do something...');
});

button.addEventListener('click', doSomething);
// -> logs "Do something..." after button is clicked at least 4 times.
```
