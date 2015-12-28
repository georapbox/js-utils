### [is](../) > isString

```js
isString(value)
```

>Checks if <code>value</code> is string.

>Returns true if <code>value</code> is a string, else returns false.

- <code>value {\*}</code>

The value to check.

#### Example
```js
isString(['a', 'b', 'c', 'd']); // ==> false
isString(100); // ==> false
isString('Lorem ipsum dolor sit amet'); // ==> true
isString({ a: 'a', b: 'b' }); // ==> false
```
