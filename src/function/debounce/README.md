### [Function](../) > debounce

```js
debounce(callback, [, n=0] [, immediate])
```

Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for 'n' milliseconds. If `immediate` is passed, trigger the function on the leading edge, instead of the trailing.

#### Arguments

- `callback` _(function)_: The function to be executed.

- `[n=0]` _(number)_: Optional. Default value is 0. Time of delay in milliseconds. It is required if you need to use `immediate`.

- `[immediate]` _(boolean)_: Optional. If true or any truthy value, triggers the function on the leading edge.

#### Returns

_(function)_: Returns a new debounced function.

#### Example
```js
var doSomething = debounce(function () {
    // Do something...
}, 250);

window.addEventListener('resize', doSomething, false);
```
