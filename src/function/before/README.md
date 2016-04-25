### [Function](../) > before

```js
before(n, func)
```
> Creates a function that invokes `func` while it’s called less than n times.
> `func` is invoked with the this binding and arguments of the created function.

`n {Number}`

- The number of calls before `func` is no longer invoked. A positive integer is expected.<br>
If a negative number or 0, `func` is never invoked.<br>
If `NaN`, `-Infinity` or `Infinity`, `func` is never invoked.

`func {Function}`

- The function to restrict.

#### Example
```js
var doSomething = before(6, function () {
    console.log('Do something...');
});

button.addEventListener('click', doSomething);
// -> logs "Do something..." up to 5 times.
```
