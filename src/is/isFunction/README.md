### [is](../) > isFunction

```js
isFunction(value)
```

> Checks if <code>value</code> is a function.

> Returns true if <code>value</code> is a function, else returns false.

- <code>value {\*}</code>

The value to check.

#### Example
```js
isFunction(function test() {
    return 'This is test function.';
});
// => true

isFunction('This is a test function.');
// => false
```
