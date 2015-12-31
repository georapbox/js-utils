### [is](../) > isInteger

```js
isInteger(value)
```

> Checks if <code>value</code> is an integer.<br/>
> If the target value is an integer, return true, otherwise return false. If the value is NaN or infinite, return false.

- <code>value {\*}</code>

The value to check.

#### Example
```js
isInteger(1);                 // => true
isInteger(9007199254740992);  // => true
isInteger(-9007199254740992); // => true
isInteger(-100000);           // => true
isInteger(0);                 // => true
isInteger(0.1);               // => false
isInteger(Math.PI);           // => false
isInteger(NaN);               // => false
isInteger('10');              // => false
isInteger(Math.MAX_VALUE);    // => false
isInteger(Infinity);          // => false
```
