### [is](../) > isFunction

```js
isFunction(value)
```

Checks if `value` is a function.

#### Arguments

- `value` _(*)_: The value to check.

#### Returns

_(boolean)_: Returns `true` if value is function, else returns `false`.

#### Examples
```js
isFunction(function test() {
    return 'This is test function.';
});
// -> true

isFunction('This is a test function.');
// -> false
```
