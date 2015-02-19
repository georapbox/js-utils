##isFunction
> Checks if 'value' is a function.

>Returns true if value is a function, else returns false.

####Syntax
```js
isFunction(value)
```

- <code>value</code>

The value to check.

####Example
```js
isFunction(function test() {
    return 'This is test function.';
});
// => true

isFunction('This is a test function.');
// => false
```